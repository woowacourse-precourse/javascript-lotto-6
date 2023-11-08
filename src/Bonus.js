class Bonus {
  #number;

  constructor(winningNumbers, inputBonusNumber) {
    const bonusNumber = Number(inputBonusNumber);
    this.#validate(winningNumbers, bonusNumber);
    this.#number = bonusNumber;
  }

  #validate(winningNumbers, bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하여야 합니다.');
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호 외의 숫자여야 합니다.');
    }
  }

  get bonusNumber() {
    return this.#number;
  }
}

export default Bonus;
