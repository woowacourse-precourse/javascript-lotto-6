import MatchingTable from './MatchingTable.js';
import {
  COUNT,
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  MATCH_COUNTS,
  PERCENTAGE,
} from './constants/conditions.js';

export default class LottoGame {
  #autoLottos;

  #winningLotto;

  #bonus;

  #matchingTable;

  constructor(autoLottos, winningLotto, bonus) {
    this.#autoLottos = autoLottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
    this.#matchingTable = new MatchingTable();
  }

  getWinningResult() {
    this.#countMatchingNumbers();
    return this.#matchingTable.getSummaryResult();
  }

  #countMatchingNumbers() {
    this.#autoLottos.reduce((acc, autoLotto) => {
      let count = DEFAULT_NUM;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += COUNT.plus;
      });
      this.#updateMatchingTable(autoLotto, count);
      return acc;
    }, this.#winningLotto);
  }

  #updateMatchingTable(autoLotto, count) {
    if (count === MATCH_COUNTS.five) {
      if (autoLotto.includes(this.#bonus))
        this.#matchingTable.updateTable(count, true);
      else this.#matchingTable.updateTable(count, false);
    }
    this.#matchingTable.updateTable(count);
  }

  getRateOfReturn() {
    const income = this.#getIncome();
    const inputMoney = this.#autoLottos.length * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getIncome() {
    let income = 0;
    const table = this.#matchingTable.getTable();
    table.forEach((count, { prize }) => {
      income += prize * count;
    });
    return income;
  }
}
