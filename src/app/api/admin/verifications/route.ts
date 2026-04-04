import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma.server';

export async function GET() {
    try {
        const verifications = await prisma.winning.findMany({
            where: { status: 'PENDING_PROOF' },
            include: { profile: true, draw: true },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(verifications);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        const { winningId, action } = await req.json();

        const updated = await prisma.winning.update({
            where: { id: winningId },
            data: { status: action === 'APPROVE' ? 'VERIFIED' : 'PENDING_PROOF' }
        });

        return NextResponse.json(updated);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
