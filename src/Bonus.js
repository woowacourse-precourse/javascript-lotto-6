class Bonus {
  #number;

  constructor(winningNumbers, inputBonusNumber) {
    this.#validate(winningNumbers, inputBonusNumber);
    this.#number = inputBonusNumber;
  }

  #validate(winningNumbers, inputBonusNumber) {
    if (Number.isNaN(inputBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
    if (inputBonusNumber < 1 || inputBonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하여야 합니다.');
    }
    if (winningNumbers.includes(inputBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호 외의 숫자여야 합니다.');
    }
  }

  get bonusNumber() {
    return this.#number;
  }
}

export default Bonus;
