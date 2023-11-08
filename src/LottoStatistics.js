export default class LottoStatistics {
    constructor(winningNumbers, bonusNumber, priceAvg) {
        this.winningNumbers = winningNumbers;
        this.bonusNumber = bonusNumber;
        this.priceAvg = priceAvg;
        this.statistics = {
            three: 0,
            four: 0,
            five: 0,
            fiveWithBonus: 0,
            six: 0
        };
        this.prizes = {
            three: 5000,
            four: 50000,
            five: 1500000,
            fiveWithBonus: 30000000,
            six: 2000000000
        };
    }
    calculate(lottos) {
        lottos.forEach(lotto => {
            const matchCount = lotto.numbers.filter(number => this.winningNumbers.includes(number)).length;
            const hasBonus = lotto.numbers.includes(this.bonusNumber);

            if (matchCount === 3) this.statistics.three++;
            else if (matchCount === 4) this.statistics.four++;
            else if (matchCount === 5 && hasBonus) this.statistics.fiveWithBonus++;
            else if (matchCount === 5) this.statistics.five++;
            else if (matchCount === 6) this.statistics.six++;
        });
    }

    getStatistics() {
        return this.statistics;
    }

    calculateProfitRate(purchasedLottos) {
        const totalSpent = purchasedLottos.length * this.priceAvg;
        const totalPrize = Object.entries(this.statistics).reduce((total, [key, count]) => {
            return total + count * this.prizes[key];
        }, 0);
        const profitRate = (((totalPrize - totalSpent) / totalSpent) * 100) + 100;
        return profitRate.toFixed(1);
    }
}
