import { LOTTO } from './constant/index.js';

class ReturnRateCalculator {
  static getReturnRate(outcome, buyingPrice) {
    const totalProfit = ReturnRateCalculator.#getTotalProfit(outcome);
    const returnRate = (totalProfit / buyingPrice) * 100;
    return Math.round((returnRate + Number.EPSILON) * 100) / 100;
  }

  static #getTotalProfit(outcome) {
    let result = 0;

    for (const key in LOTTO.PRIZE) {
      result += LOTTO.PRIZE[key] * outcome[key];
    }

    return result;
  }
}

export default ReturnRateCalculator;
