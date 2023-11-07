import {
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  PERCENTAGE,
} from './constants/conditions.js';
import PRIZE from './constants/rankingPrize.js';

export default class RateOfReturn {
  getRateOfReturn(matchingTable, purchaseAmount) {
    let income = DEFAULT_NUM;
    Object.entries(matchingTable).forEach(([matchedCount, count]) => {
      income += PRIZE[matchedCount] * count;
    });
    return this.#calculateRateOfReturn(income, purchaseAmount);
  }

  #calculateRateOfReturn(income, purchaseAmount) {
    const inputMoney = purchaseAmount * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return rateOfReturn.toFixed(1);
  }
}
