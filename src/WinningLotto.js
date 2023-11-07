class WinningLotto {
  #lotto;
  #bonusBall;

  constructor(lotto, bonusBall) {
    this.#lotto = lotto;
    this.#bonusBall = bonusBall;
  }

  compareWith(lotto) {
    const count = this.#lotto.countSameNumber(lotto);
    const hasBonus = this.#bonusBall.includedIn(lotto);

    return [count, hasBonus];
  }
}

export default WinningLotto;
