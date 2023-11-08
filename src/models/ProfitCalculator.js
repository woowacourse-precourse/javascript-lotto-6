class ProfitCalculator {
    constructor(result, budget) {
        this.result = result;
        this.budget = budget;
    }

    getTotalPrize() {
        const prizeAmounts = {
            '1st': 2000000000,
            '2nd': 30000000,
            '3rd': 1500000,
            '4th': 50000,
            '5th': 5000
        };

        let totalPrize = 0;
        for (const rank in this.result) {
            if (prizeAmounts.hasOwnProperty(rank)) {
                totalPrize += prizeAmounts[rank] * this.result[rank];
            }
        }
    
        return totalPrize;
    }

    calculateProfit(totalPrize) {
        // 수익률 계산
        return Math.round((totalPrize / this.budget) * 100 * 100) / 100;
    }

    getProfitRate() {
        const totalPrize = this.getTotalPrize();
        return this.calculateProfit(totalPrize).toFixed(1);
    }
}

export default ProfitCalculator;
