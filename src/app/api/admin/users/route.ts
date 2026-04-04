import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma.server';

export async function GET() {
    try {
        const users = await prisma.profile.findMany({
            include: {
                scores: {
                    orderBy: { datePlayed: 'desc' },
                    take: 5
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(users);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        const data = await req.json();
        const { id, firstName, lastName, subscriptionStatus, tier, scores } = data;

        // Update profile
        const updatedProfile = await prisma.profile.update({
            where: { id },
            data: {
                firstName,
                lastName,
                subscriptionStatus,
                tier
            }
        });

        // Update scores if provided (advanced operator override)
        if (scores && Array.isArray(scores)) {
            // Simplify: delete old scores and replace with new ones for this demo/admin override
            // In real production, we might want to be more granular.
            await prisma.score.deleteMany({ where: { profileId: id } });
            for (const val of scores) {
                await prisma.score.create({
                    data: {
                        profileId: id,
                        value: parseInt(val) || 0,
                        datePlayed: new Date()
                    }
                });
            }
        }

        return NextResponse.json(updatedProfile);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
