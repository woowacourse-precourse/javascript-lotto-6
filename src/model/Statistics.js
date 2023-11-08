import { STATISTICS } from '../constants/constants.js';

class Statistics {
  #rateOfReturn;
  #statistics;

  constructor() {
    this.#rateOfReturn = 0;
    this.#statistics = {};
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
  }

  getStatistics() {
    return this.#statistics;
  }

  calculateStatistics(matchingResult, purchaseAmount) {
    this.#statistics = STATISTICS.map((statistic) => ({
      ...statistic,
      count: matchingResult[statistic.rank] || 0,
    }));

    const totalWinnings = this.#statistics.reduce((total, statistic) => {
      return total + statistic.winnings * statistic.count;
    }, 0);

    this.#rateOfReturn = this.roundRateOfReturn(totalWinnings, purchaseAmount);
  }

  roundRateOfReturn(totalWinnings, purchaseAmount) {
    const rateOfReturn = Number(
      ((totalWinnings / purchaseAmount) * 100).toFixed(1)
    );
    if (Number.isInteger(rateOfReturn))
      return `${rateOfReturn.toLocaleString('en-US')}.0`;
    return rateOfReturn.toLocaleString('en-US');
  }
}

export default Statistics;
