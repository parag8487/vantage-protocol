/**
 * Golf Charity Platform Draw Engine
 * Implements RNG and Frequency-Weighted logic for monthly draws.
 */

export type DrawMode = 'RANDOM' | 'ALGORITHMIC';

export class DrawEngine {
    /**
     * Generates 5 unique numbers between 1 and 45.
     */
    static generateWinningNumbers(mode: DrawMode, userScorePool: number[] = []): number[] {
        if (mode === 'RANDOM' || userScorePool.length === 0) {
            return this.generateRandom();
        }
        return this.generateAlgorithmic(userScorePool);
    }

    private static generateRandom(): number[] {
        const numbers = new Set<number>();
        while (numbers.size < 5) {
            const num = Math.floor(Math.random() * 45) + 1;
            numbers.add(num);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    /**
     * Algorithmic Mode: Weights selection by the most frequent scores in the user pool.
     * This increases the probability of having winners (marketing boost).
     */
    private static generateAlgorithmic(pool: number[]): number[] {
        const frequency: Record<number, number> = {};
        pool.forEach(n => {
            frequency[n] = (frequency[n] || 0) + 1;
        });

        // Create a weighted array
        const weightedPool: number[] = [];
        Object.entries(frequency).forEach(([num, count]) => {
            // Add number to pool 'count' times to bias RNG
            for (let i = 0; i < count; i++) {
                weightedPool.push(parseInt(num));
            }
        });

        const winningSet = new Set<number>();

        // Fill from weighted pool first
        while (winningSet.size < 5 && weightedPool.length > 0) {
            const randIdx = Math.floor(Math.random() * weightedPool.length);
            const picked = weightedPool[randIdx];
            winningSet.add(picked);
            // Remove picked number instances from pool to ensure uniqueness in draw
            const idx = weightedPool.indexOf(picked);
            while (weightedPool.includes(picked)) weightedPool.splice(weightedPool.indexOf(picked), 1);
        }

        // fallback to random if pool was too small or unique counts < 5
        while (winningSet.size < 5) {
            const num = Math.floor(Math.random() * 45) + 1;
            winningSet.add(num);
        }

        return Array.from(winningSet).sort((a, b) => a - b);
    }

    /**
     * Calculates matches between winning numbers and user ticket.
     */
    static countMatches(winning: number[], ticket: number[]): number {
        return ticket.filter(n => winning.includes(n)).length;
    }

    /**
     * Splits prize pool according to PRD tiers: 40/35/25
     */
    static calculatePrizeSplit(totalPool: number, rollover: number = 0) {
        return {
            tier5: (totalPool * 0.4) + rollover,
            tier4: totalPool * 0.35,
            tier3: totalPool * 0.25,
        };
    }
}
