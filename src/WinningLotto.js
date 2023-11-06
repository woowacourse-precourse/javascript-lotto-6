class WinningLotto {
  #lotto;
  #bonusBall;

  constructor(lotto, bonusBall) {
    this.#lotto = lotto;
    this.#bonusBall = bonusBall;
  }

  countSameNumber(lotto) {
    const count = this.#lotto.compareWith(lotto);
    const hasBonus = this.#bonusBall.includedIn(lotto);

    return [count, hasBonus];
  }
}

export default WinningLotto;
