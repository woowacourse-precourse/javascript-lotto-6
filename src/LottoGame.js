import MatchingTable from './MatchingTable.js';
import {
  COUNT,
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  MATCH_COUNTS,
  PERCENTAGE,
} from './constants/conditions.js';
import PRIZE from './constants/rankingPrize.js';

export default class LottoGame {
  #autoLottos;

  #winningLotto;

  #bonus;

  constructor(autoLottos, winningLotto, bonus) {
    this.#autoLottos = autoLottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
  }

  getWinningResult() {
    const matchCountList = this.#countMatchingNumbers();
    const matchingTable = this.#transformMatchingTable(matchCountList);
    const rateOfReturn = this.#getRateOfReturn(matchingTable);
    return { matchingTable, rateOfReturn };
  }

  #countMatchingNumbers() {
    const matchCountList = [];
    this.#autoLottos.reduce((acc, autoLotto) => {
      let count = DEFAULT_NUM;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += COUNT.plus;
      });
      this.#updateMatchCountList(matchCountList, count, autoLotto);
      return acc;
    }, this.#winningLotto);
    return matchCountList;
  }

  #updateMatchCountList(matchCountList, count, autoLotto) {
    if (count === MATCH_COUNTS.five) {
      matchCountList.push(
        autoLotto.includes(this.#bonus) ? [count, true] : [count, false],
      );
    }
    matchCountList.push(count);
  }

  #transformMatchingTable(matchCountList) {
    const matchingTable = new MatchingTable();
    matchingTable.updateTable(matchCountList);
    return matchingTable.getTable();
  }

  #calculateRateOfReturn(income) {
    const inputMoney = this.#autoLottos.length * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getRateOfReturn(matchingTable) {
    let income = DEFAULT_NUM;
    Object.entries(matchingTable).forEach(([matchedCount, count]) => {
      income += PRIZE[matchedCount] * count;
    });
    return this.#calculateRateOfReturn(income);
  }
}
