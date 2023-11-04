/*
🐛FIX: matchingTable을 객체로 관리하기, 함수 크기 줄이기
*/
export default class LottoGame {
  #autoLottos;

  #winningLotto;

  #bonus;

  #matchingTable;

  constructor(autoLottos, winningLotto, bonus) {
    this.#autoLottos = autoLottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
    this.#matchingTable = {
      threeMatching: 0,
      fourMatching: 0,
      fiveMatchingNotBonus: 0,
      fiveMatchingAndBonus: 0,
      allMatching: 0,
    };
  }

  getWinningResult() {
    this.#autoLottos.reduce((acc, autoLotto) => {
      let count = 0;
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) count += 1;
      });
      this.#checkMatchingCount(count, autoLotto);
      return acc;
    }, this.#winningLotto);

    return this.#matchingTable;
  }

  #checkMatchingCount(count, autoLotto) {
    if (count === 3) this.#matchingTable.threeMatching += 1;
    if (count === 4) this.#matchingTable.fourMatching += 1;
    if (count === 5) {
      autoLotto.includes(this.#bonus)
        ? (this.#matchingTable.fiveMatchingAndBonus += 1)
        : (this.#matchingTable.fiveMatchingNotBonus += 1);
    }
    if (count === 6) this.#matchingTable.allMatching += 1;
  }

  getRateOfReturn() {
    const income = this.#getIncome();
    const inputMoney = this.#autoLottos.length * 1000;
    const rateOfReturn = (income / inputMoney) * 100;
    return +`${Math.round(`${rateOfReturn}e+2`)}e-2`;
  }

  #getIncome() {
    const {
      threeMatching,
      fourMatching,
      fiveMatchingNotBonus,
      fiveMatchingAndBonus,
      allMatching,
    } = this.#matchingTable;
    const income =
      threeMatching * 5000 +
      fourMatching * 50000 +
      fiveMatchingNotBonus * 1500000 +
      fiveMatchingAndBonus * 30000000 +
      allMatching * 2000000000;
    return income;
  }
}
