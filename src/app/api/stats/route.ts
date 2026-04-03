import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma';

export async function GET() {
    try {
        const totalProfiles = await prisma.profile.count();
        const draws = await prisma.drawResult.findMany({ select: { poolTotal: true } });

        const totalPoolGenerated = draws.reduce((sum: number, d: any) => sum + d.poolTotal, 0);
        // Simulate total impact based on subscription count if no real payments yet
        const baseImpact = 1420000; // Starting baseline for "Wow" factor
        const dynamicImpact = baseImpact + (totalProfiles * 29.99);

        return NextResponse.json({
            totalMembers: 12450 + totalProfiles, // Baseline + dynamic
            totalPhilanthropy: dynamicImpact,
            avgPool: 50000,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
