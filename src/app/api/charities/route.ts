import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import prisma from '@/lib/prisma.server';

export async function GET() {
    try {
        const charities = await prisma.charity.findMany({
            where: { isActive: true },
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(charities);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, description, category, location } = body;
        const charity = await prisma.charity.create({
            data: {
                id: name.toLowerCase().replace(/\s+/g, '-'), // Manual slug-id for this demo, or use uuid
                name,
                description,
                category,
                location: location || 'Global',
                isActive: true
            }
        });
        return NextResponse.json(charity);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) throw new Error('Missing ID');

        const charity = await prisma.charity.update({
            where: { id },
            data: { isActive: false }
        });
        return NextResponse.json(charity);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
