import MatchingTable from './MatchingTable.js';
import {
  COUNT,
  DEFAULT_NUM,
  LOTTO_TICKET_PRICE,
  MATCH_COUNTS,
  PERCENTAGE,
  PRIZE_MONEY,
  RANKING,
} from './constants/conditions.js';

export default class LottoGame {
  #autoLottos;

  #winningLotto;

  #bonus;

  #matchingTable;

  #rankingList;

  constructor(autoLottos, winningLotto, bonus) {
    this.#autoLottos = autoLottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
    this.#matchingTable = new MatchingTable();
    this.#rankingList = [];
  }

  getWinningResult() {
    this.#countMatchingNumbers();
    this.#matchingTable.updateMatchingCount(this.#rankingList);
    return this.#matchingTable.getMatchingTable();
  }

  #countMatchingNumbers() {
    this.#autoLottos.reduce((acc, autoLotto) => {
      let count = DEFAULT_NUM;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += COUNT.minus;
      });
      this.#updateRankingList(autoLotto, count);
      return acc;
    }, this.#winningLotto);
  }

  #updateRankingList(autoLotto, count) {
    if (count === MATCH_COUNTS.threeMatch)
      this.#rankingList.push(RANKING.fifth);
    if (count === MATCH_COUNTS.fourMathch)
      this.#rankingList.push(RANKING.fourth);
    if (count === MATCH_COUNTS.fiveMatch) {
      if (autoLotto.includes(this.#bonus))
        this.#rankingList.push(RANKING.second);
      else this.#rankingList.push(RANKING.third);
    }
    if (count === MATCH_COUNTS.allMatch) this.#rankingList.push(RANKING.first);
  }

  getRateOfReturn() {
    const income = this.#getIncome();
    const inputMoney = this.#autoLottos.length * LOTTO_TICKET_PRICE;
    const rateOfReturn = (income / inputMoney) * PERCENTAGE;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getIncome() {
    let income = 0;
    this.#rankingList.forEach((ranking) => {
      if (ranking === RANKING.fifth) income += PRIZE_MONEY.fifth;
      if (ranking === RANKING.fourth) income += PRIZE_MONEY.fourth;
      if (ranking === RANKING.third) income += PRIZE_MONEY.third;
      if (ranking === RANKING.second) income += PRIZE_MONEY.second;
      if (ranking === RANKING.first) income += PRIZE_MONEY.first;
    });
    return income;
  }
}
