class BonusNumber {
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#validate(winningNumber, bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(winningNumber, bonusNumber) {
    if (!Number.isInteger(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 정수 이여야 합니다.');
    }

    if (bonusNumber.length !== Number(bonusNumber).toString().length) {
      throw new Error('[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.');
    }

    if (Number(bonusNumber) > 45 || Number(bonusNumber) < 1) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이의 수 이여야 합니다.');
    }

    if (winningNumber.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  getBonusNumber() {
    return Number(this.#bonusNumber);
  }
}

export default BonusNumber;
