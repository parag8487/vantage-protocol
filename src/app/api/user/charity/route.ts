import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma.server';

/**
 * Handles Charity Selection and Percentage Updates.
 */
export async function PATCH(req: Request) {
    try {
        const { profileId, charityId, percentage } = await req.json();

        // PRD Constraint: Minimum 10%
        const finalPercentage = Math.max(percentage || 10, 10);

        const updatedProfile = await prisma.profile.update({
            where: { id: profileId },
            data: {
                selectedCharityId: charityId,
                charityPercentage: finalPercentage,
            },
        });

        return NextResponse.json({
            message: 'Charity preferences updated',
            profile: updatedProfile
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
