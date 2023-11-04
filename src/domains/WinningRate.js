class WinningRate {
  #lotto;

  #bonusNumber;

  constructor(lotto, bonusNumber) {
    this.#lotto = lotto;
    this.#bonusNumber = bonusNumber;
    this.#validate(bonusNumber);
  }

  #validate(bonusNumber) {
    if (this.#lotto.includesNumber(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호가 당첨번호와 중복되었습니다.");
    }

    if (typeof bonusNumber !== "number" || Number.isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }
}

export default WinningRate;
