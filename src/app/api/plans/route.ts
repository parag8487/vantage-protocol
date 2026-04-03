import { NextResponse } from 'next/server';

export async function GET() {
    const plans = [
        {
            id: "monthly",
            name: "Monthly Protocol",
            price: "$29",
            period: "month",
            description: "Perfect for casual players wanting to test the impact.",
            features: ["Last 5 score tracking", "1 monthly draw entry", "10% basic charity donation", "Mobile dashboard access"],
            cta: "Subscribe Monthly",
            popular: false,
            stripePriceId: "price_1..."
        },
        {
            id: "yearly",
            name: "Yearly Protocol",
            price: "$290",
            period: "year",
            description: "The gold standard for high-impact players and consistent winners.",
            features: ["All Monthly features", "2 months free ($58 savings)", "Increased draw odds algorithm", "Priority winner verification", "Exclusive impact reports"],
            cta: "Subscribe Yearly",
            popular: true,
            stripePriceId: "price_2..."
        }
    ];
    return NextResponse.json(plans);
}
