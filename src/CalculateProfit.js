import { Console } from '@woowacourse/mission-utils';
import { PRIZE_MONEY, ERROR_MESSAGE } from './constants/constants.js';

class CalculateProfit {
  #results;

  #moneySpent;

  #profitRate;

  constructor({ results, moneySpent }) {
    this.#validate(results, moneySpent);

    this.#results = results;
    this.#moneySpent = moneySpent;

    this.#calculateProfit();
  }

  #validate(results, moneySpent) {
    if (typeof moneySpent !== 'number' || moneySpent <= 0) {
      throw new Error(ERROR_MESSAGE.MONEY_SPENT);
    }
    if (
      !results ||
      typeof results !== 'object' ||
      !Object.values(results).every(
        (value) => Number.isInteger(value) && value >= 0,
      )
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO_RESULT);
    }
  }

  #calculateProfit() {
    let totalPrize = 0;

    Object.keys(this.#results).forEach((key) => {
      totalPrize += this.#results[key] * PRIZE_MONEY[key];
    });

    this.#profitRate =
      Math.round((totalPrize / this.#moneySpent) * 100 * 100) / 100;
  }

  printResults() {
    Console.print(`총 수익률은 ${this.#profitRate}%입니다.`);
  }
}

export default CalculateProfit;
