import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
    // Graceful failure for dev if key isn't provided yet
    console.warn('RESEND_API_KEY is missing');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWinnerEmail = async (email: string, amount: number, matchCount: number) => {
    try {
        await resend.emails.send({
            from: 'Vantage Golf <notifications@yourdomain.com>',
            to: email,
            subject: `🏆 You won the ${matchCount}-Number Match!`,
            html: `
        <h1>Congratulations!</h1>
        <p>You matched ${matchCount} numbers in this month's draw.</p>
        <p>Your estimated prize: <strong>$${amount.toFixed(2)}</strong></p>
        <p>Please log in to your dashboard to upload proof and claim your prize.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard/winnings">Go to Winnings</a>
      `,
        });
    } catch (error) {
        console.error('Email failed:', error);
    }
};
