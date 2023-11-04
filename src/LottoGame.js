import MatchingTable from './MatchingTable.js';

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
      let count = 0;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += 1;
      });
      this.#updateRankingList(autoLotto, count);
      return acc;
    }, this.#winningLotto);
  }

  #updateRankingList(autoLotto, count) {
    if (count === 3) this.#rankingList.push(5);
    if (count === 4) this.#rankingList.push(4);
    if (count === 5) {
      if (autoLotto.includes(this.#bonus)) this.#rankingList.push(2);
      else this.#rankingList.push(3);
    }
    if (count === 6) this.#rankingList.push(1);
  }

  getRateOfReturn() {
    const income = this.#getIncome();
    const inputMoney = this.#autoLottos.length * 1000;
    const rateOfReturn = (income / inputMoney) * 100;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getIncome() {
    let income = 0;
    this.#rankingList.forEach((ranking) => {
      if (ranking === 5) income += 5000;
      if (ranking === 4) income += 50000;
      if (ranking === 3) income += 1500000;
      if (ranking === 2) income += 30000000;
      if (ranking === 1) income += 2000000000;
    });
    return income;
  }
}
