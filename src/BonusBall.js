class BonusBall {
  #bonusBall;

  // #winningLotto;

  constructor(bonusBall) {
    this.#validate(bonusBall);
    this.#bonusBall = bonusBall;
    // this.#winningLotto = Array.isArray(winningLotto) ? winningLotto : [];
  }

  #validate(bonusBall) {
    if (isNaN(bonusBall)) {
      throw new Error('[ERROR] 보너스볼은 숫자의 형태로 입력해야 합니다.');
    }
    if (bonusBall < 1 || bonusBall > 45) {
      throw new Error('[ERROR] 보너스볼은 1~45 범위에 있어야 합니다.');
    }
    // if (winningLotto.includes(bonusBall)) {
    //   throw new Error('[ERROR] 보너스볼은 당첨번호와 중복되지 않아야 합니다.');
    // }
  }

  getBonusBall() {
    return this.#bonusBall;
  }
}

export default BonusBall;
