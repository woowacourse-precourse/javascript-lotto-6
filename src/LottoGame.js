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
    const result = Array.from({ length: this.#autoLottos.length }).fill(0);
    this.#autoLottos.reduce((acc, autoLotto, index) => {
      acc.forEach((winningNum) => {
        if (autoLotto.includes(winningNum)) result[index] += 1;
      });
      if (result[index] === 5) {
        result[index] = autoLotto.includes(this.#bonus)
          ? [result[index], true]
          : [result[index], false];
      }
      return acc;
    }, this.#winningLotto);
    return result;
  }
}
