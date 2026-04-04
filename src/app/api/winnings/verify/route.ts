import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma.server';

/**
 * Handles Winner Proof Submission.
 * In a real app, this would involve Supabase Storage.
 * Mapped to logic: PENDING_PROOF -> PENDING_ADMIN_REVIEW
 */
export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const winnerId = formData.get('winnerId') as string;
        const profileId = formData.get('profileId') as string;
        const file = formData.get('file');

        if (!file || !winnerId) {
            return NextResponse.json({ error: 'Missing file or winner ID' }, { status: 400 });
        }

        // Logic: Simulate upload and update winner record
        // In production: const { data } = await supabase.storage.from('proofs').upload(...)

        const updatedWinner = await prisma.winner.update({
            where: {
                id: winnerId,
                profileId: profileId // Security check
            },
            data: {
                status: 'PENDING_ADMIN_REVIEW',
                proofImageUrl: 'simulated_storage_url_path.jpg'
            }
        });

        return NextResponse.json({
            message: 'Proof submitted for review',
            winner: updatedWinner
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
