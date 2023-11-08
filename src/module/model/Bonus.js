class bonus {
  #bonusNumber;

  constructor(bonusNumber) {
    this.#validateBonus(bonusNumber);
    this.#checkBonusBound(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonus(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 정수 한개만 입력되어야 합니다.');
    }
  }

  #checkBonusBound(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하여야 합니다.');
    }
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default bonus;
