import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma.server';
import { DrawEngine, DrawMode } from '@/lib/draw-engine';
import { sendWinnerEmail } from '@/lib/resend';

export async function POST(req: Request) {
    try {
        const { mode, isSimulation } = await req.json();

        // 1. Fetch all active subscribers and their current scores
        const activeSubscribers = await prisma.profile.findMany({
            where: { subscriptionStatus: 'ACTIVE' },
            include: { scores: { orderBy: { createdAt: 'desc' }, take: 5 } }
        });

        // 2. Extract score pool for Algorithmic mode
        const allScores = activeSubscribers.flatMap((sub: any) => sub.scores.map((s: any) => s.value));

        // 3. Run Build Engine
        const winningNumbers = DrawEngine.generateWinningNumbers(mode as DrawMode, allScores);

        // 4. Match Analysis
        const winners = activeSubscribers.map((sub: any) => {
            const ticket = sub.scores.map((s: any) => s.value);
            const matches = DrawEngine.countMatches(winningNumbers, ticket);
            return {
                profileId: sub.id,
                email: sub.email,
                matches,
                ticket,
                lockedScores: ticket.join(',')
            };
        }).filter((w: any) => w.matches >= 3);

        // 5. Prize Pool (Static for Sim, Dynamic in Production)
        const poolAmount = activeSubscribers.length * 25; // Example: $25 of the $29 sub goes to pool
        const prizes = DrawEngine.calculatePrizeSplit(poolAmount);

        const results = {
            winningNumbers,
            totalSubscribers: activeSubscribers.length,
            poolAmount,
            matches3: winners.filter((w: any) => w.matches === 3).length,
            matches4: winners.filter((w: any) => w.matches === 4).length,
            matches5: winners.filter((w: any) => w.matches === 5).length,
            winners: isSimulation ? winners : undefined // Only return winning list in simulation
        };

        if (isSimulation) {
            return NextResponse.json({ message: 'Simulation complete', results });
        }

        // 6. DB COMMIT (Atomic Transaction)
        const officialDraw = await prisma.$transaction(async (tx: any) => {
            const draw = await tx.drawResult.create({
                data: {
                    monthYear: new Date().toISOString().slice(0, 7),
                    poolTotal: poolAmount,
                    winningNumbers: winningNumbers.join(','),
                    status: 'PUBLISHED',
                    executedAt: new Date(),
                }
            });

            // Create winner records
            for (const w of winners) {
                let prize = 0;
                if (w.matches === 5) prize = prizes.tier5 / results.matches5;
                if (w.matches === 4) prize = prizes.tier4 / results.matches4;
                if (w.matches === 3) prize = prizes.tier3 / results.matches3;

                await tx.winner.create({
                    data: {
                        drawId: draw.id,
                        profileId: w.profileId,
                        matchCount: w.matches,
                        prizeAmount: prize,
                        status: 'PENDING_PROOF'
                    }
                });

                // TRIGGER EMAIL NOTIFICATION
                await sendWinnerEmail(w.email, prize, w.matches);
            }

            return draw;
        });

        return NextResponse.json({ message: 'Official draw published', draw: officialDraw });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
