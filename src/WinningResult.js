import {
  COUNT,
  DEFAULT_NUM,
  IS_BOUNS_INDEX,
  LOTTO_TICKET_PRICE,
  MATCH_COUNTS,
  PERCENTAGE,
} from './constants/conditions.js';
import PRIZE from './constants/rankingPrize.js';

export default class WinningResult {
  #matchCountList;

  #matchingTable = {
    three: DEFAULT_NUM,
    four: DEFAULT_NUM,
    fiveNotBonus: DEFAULT_NUM,
    fiveAndBonus: DEFAULT_NUM,
    all: DEFAULT_NUM,
  };

  constructor(matchCountList) {
    this.#matchCountList = matchCountList;
    this.#updateTable(this.#matchCountList);
  }

  getResult() {
    const rateOfReturn = this.#getRateOfReturn();
    return { matchingTable: this.#matchingTable, rateOfReturn };
  }

  #updateTable(matchCountList) {
    matchCountList.forEach((count) => {
      if (Array.isArray(count)) {
        this.#isBonusMatch(count)
          ? (this.#matchingTable.fiveAndBonus += COUNT.plus)
          : (this.#matchingTable.fiveNotBonus += COUNT.plus);
      }
      if (count === MATCH_COUNTS.three) this.#matchingTable.three += COUNT.plus;
      if (count === MATCH_COUNTS.four) this.#matchingTable.four += COUNT.plus;
      if (count === MATCH_COUNTS.all) this.#matchingTable.all += COUNT.plus;
    });
  }

  #isBonusMatch(count) {
    return !!count[IS_BOUNS_INDEX];
  }

  #calculateRateOfReturn(income) {
    const inputMoney = this.#matchCountList.length * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getRateOfReturn() {
    let income = DEFAULT_NUM;
    Object.entries(this.#matchingTable).forEach(([matchedCount, count]) => {
      income += PRIZE[matchedCount] * count;
    });
    return this.#calculateRateOfReturn(income);
  }
}
