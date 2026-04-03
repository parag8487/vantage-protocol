/**
 * Charity Calculation Logic
 * Minimum 10% contribution required.
 */

export const MIN_CHARITY_PERCENTAGE = 10;

export interface CharityContribution {
    amount: number;
    percentage: number;
}

export class CharityService {
    /**
     * Calculates the exact dollar amount reserved for charity
     * from a subscription payment.
     */
    static calculateImpact(subscriptionFee: number, userPercentage: number = MIN_CHARITY_PERCENTAGE): CharityContribution {
        const finalPercentage = Math.max(userPercentage, MIN_CHARITY_PERCENTAGE);
        const amount = (subscriptionFee * finalPercentage) / 100;

        return {
            amount,
            percentage: finalPercentage
        };
    }

    /**
     * Recommends a high-impact donation top-up based on prize winnings.
     */
    static suggestDonation(winnings: number): number {
        return winnings * 0.25; // Suggest donating 25% of winnings back to cause
    }
}
