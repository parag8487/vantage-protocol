import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const { priceId, email } = await req.json();

        if (!priceId) {
            return new NextResponse('Price ID is required', { status: 400 });
        }

        // 1. Check if user already has a Stripe customer ID
        let profile = await prisma.profile.findUnique({
            where: { email },
            select: { stripeCustomerId: true, id: true }
        });

        // 2. Create Stripe session
        const session = await stripe.checkout.sessions.create({
            customer: profile?.stripeCustomerId || undefined,
            customer_email: profile?.stripeCustomerId ? undefined : email,
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?status=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?status=cancelled`,
            subscription_data: {
                metadata: {
                    paying_user_email: email,
                },
            },
            metadata: {
                paying_user_email: email,
            }
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error('Stripe Checkout Error:', error);
        return new NextResponse(error.message || 'Internal Server Error', { status: 500 });
    }
}
