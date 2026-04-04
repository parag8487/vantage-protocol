import { NextResponse } from 'next/server';

export async function GET() {
    const plans = [
        {
            id: "monthly",
            name: "Executive Protocol",
            price: "$29",
            period: "month",
            description: "Elite access for tactical philanthropy. The perfect entry into the protocol.",
            features: ["Last 5 score tracking", "1 monthly draw entry", "10% basic charity donation", "Mobile dashboard access"],
            cta: "Activate Executive",
            popular: false,
            stripePriceId: "price_1..."
        },
        {
            id: "yearly",
            name: "Elite Protocol",
            price: "$290",
            period: "year",
            description: "The gold standard for high-impact players and consistent winners. Maximum prestige.",
            features: ["All Executive features", "2 months free ($58 savings)", "Increased draw odds algorithm", "Priority winner verification", "Exclusive impact reports"],
            cta: "Activate Elite",
            popular: true,
            stripePriceId: "price_2..."
        }

    ];
    return NextResponse.json(plans);
}
