import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(req: Request) {
    try {
        const { profileId, firstName, lastName, selectedCharityId, charityPercentage } = await req.json();

        const updatedProfile = await prisma.profile.update({
            where: { id: profileId },
            data: {
                firstName,
                lastName,
                selectedCharityId,
                charityPercentage: parseFloat(charityPercentage),
            },
            include: { selectedCharity: true }
        });

        return NextResponse.json(updatedProfile);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
