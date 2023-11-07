import {
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  PERCENTAGE,
} from './constants/conditions.js';
import PRIZE from './constants/rankingPrize.js';

export default class RateOfReturn {
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  #calculateRateOfReturn(income) {
    const inputMoney = this.#purchaseAmount * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  getRateOfReturn(matchingTable) {
    let income = DEFAULT_NUM;
    Object.entries(matchingTable).forEach(([matchedCount, count]) => {
      income += PRIZE[matchedCount] * count;
    });
    return this.#calculateRateOfReturn(income);
  }
}
