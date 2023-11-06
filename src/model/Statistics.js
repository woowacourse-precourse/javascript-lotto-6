import { STATISTICS } from '../constants/constants.js';

class Statistics {
  #rateOfReturns;
  #statistics;

  constructor() {
    this.#rateOfReturns = 0;
    this.#statistics = {};
  }

  getRateOfReturns() {
    return this.#rateOfReturns;
  }

  getStatistics() {
    return this.#statistics;
  }

  calculateStatistics(userLotto, winningLotto) {
    const rankResult = userLotto.calculateMatchingNumber(winningLotto);

    this.#statistics = STATISTICS.map((statistic) => ({
      ...statistic,
      count: rankResult[statistic.rank],
    }));

    const totalWinnings = this.#statistics.reduce((total, statistic) => {
      return total + statistic.winnings * statistic.count;
    }, 0);

    this.#rateOfReturns = this.roundRateOfReturns(
      totalWinnings,
      userLotto.getPurchaseAmount()
    );
  }

  roundRateOfReturns(totalWinnings, purchaseAmount) {
    const rateOfReturns = Number(
      ((totalWinnings / purchaseAmount) * 100).toFixed(1)
    );
    if (Number.isInteger(rateOfReturns))
      return `${rateOfReturns.toLocaleString('en-US')}.0`;
    return rateOfReturns.toLocaleString('en-US');
  }
}

export default Statistics;
