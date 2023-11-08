import CONSTANTS from '../constants/constants.js';

class RateOfReturn {
  #rateOfReturn;

  constructor(winningStatistic, purchaseAmount) {
    const returns = this.#genarateReturns(winningStatistic);
    this.#rateOfReturn = this.#generateRateOfReturn(purchaseAmount, returns);
  }

  getRateOfReturn() {
    return this.#rateOfReturn;
  }

  #generateRateOfReturn(purchaseAmount, returns) {
    if (returns.length === CONSTANTS.number.zero) return '0%';

    const finalValue =
      Number(purchaseAmount) + returns.reduce((acc, currentReturn) => acc + currentReturn);
    const rateOfReturn = (((finalValue - purchaseAmount) / purchaseAmount) * 100).toFixed(1);

    return `${rateOfReturn}%`;
  }

  #genarateReturns(winningStatistics) {
    return winningStatistics
      .map(matchCount => CONSTANTS.prize[matchCount])
      .filter(item => item !== undefined);
  }
}

export default RateOfReturn;
