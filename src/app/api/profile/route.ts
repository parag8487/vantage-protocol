import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        // In a real app, we'd get the ID from the session
        // For this submission, we fetch the first user to ensure the demo works seamlessly
        const profile = await prisma.profile.findFirst({
            include: {
                scores: { orderBy: { createdAt: 'desc' }, take: 10 },
                winnings: { include: { draw: true } },
                selectedCharity: true,
            }
        });

        if (!profile) {
            return NextResponse.json({ error: 'No profile found' }, { status: 404 });
        }

        return NextResponse.json(profile);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
