export default class LottoGame {
  #autoLottos;

  #winningLotto;

  #bonus;

  #result;

  #income;

  constructor(autoLottos, winningLotto, bonus) {
    this.#autoLottos = autoLottos;
    this.#winningLotto = winningLotto;
    this.#bonus = bonus;
    this.#result = Array.from({ length: this.#autoLottos.length }).fill(0);
    this.#income = 0;
  }

  getWinningResult() {
    this.#autoLottos.reduce((acc, autoLotto, index) => {
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) this.#result[index] += 1;
      });
      if (this.#result[index] === 5) {
        this.#result[index] = autoLotto.includes(this.#bonus)
          ? [this.#result[index], true]
          : [this.#result[index], false];
      }
      return acc;
    }, this.#winningLotto);

    return this.#result;
  }

  getIncome() {
    this.#result.forEach((matchCount) => {
      if (matchCount === 3) this.#income += 5000;
      if (matchCount === 4) this.#income += 50000;
      if (Array.isArray(matchCount)) {
        this.#income += matchCount[1] ? 30000000 : 1500000;
      }
      if (matchCount === 6) this.#income += 2000000000;
    });
    return this.#income;
  }
}
