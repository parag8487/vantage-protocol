import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
    console.error('⚠️ STRIPE_SECRET_KEY is missing. Stripe features will be disabled.');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {

    apiVersion: '2025-01-27-acacia', // Best practice: use the latest stable or the one you developed with
    typescript: true,
});

export const getStripeSession = async (priceId: string, customerId: string, email: string) => {
    const session = await stripe.checkout.sessions.create({
        customer: customerId || undefined,
        customer_email: customerId ? undefined : email,
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
        subscription_data: {
            metadata: {
                paying_user_email: email,
            },
        },
    });

    return session;
};
