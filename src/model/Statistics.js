import { STATISTICS } from '../constants/constants.js';

class Statistics {
  #rateOfReturns;
  #statistics;

  constructor() {
    this.#rateOfReturns = 0;
    this.#statistics = {};
  }

  getRateOfReturns() {
    return (this.#rateOfReturns * 100).toFixed(1);
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

    this.#rateOfReturns =
      totalWinnings / (userLotto.getNumberOfPurchase() * 1000);
  }
}

export default Statistics;
