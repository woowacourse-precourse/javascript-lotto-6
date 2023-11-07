class WinNumber {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#checkNumberBound(numbers);
    this.#checkDuplication(numbers);
    this.#numbers = numbers;
    this.#validateBonus(bonusNumber);
    this.#checkBonusBound(bonusNumber);
    this.#checkDuplicationBonus(bonusNumber);
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }

  #checkDuplication(numbers) {
    numbers.forEach((e) => {
      if (numbers.includes(e)) {
        throw new Error('[ERROR] 당첨 번호는 중복되면 안됩니다.');
      }
    });
  }

  #checkNumberBound(numbers) {
    numbers.forEach((e) => {
      if (e < 1 || e > 45) {
        throw new Error('[ERROR] 당첨 번호는 1 이상 45 이하의 정수여야 합니다.');
      }
    });
  }

  #validateBonus(bonusNumber) {
    if(isNaN(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 정수 한개만 입력되어야 합니다.');
    }
  }

  #checkDuplicationBonus(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.');
    }
  }

  #checkBonusBound(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 이상 45 이하여야 합니다.');
    }
  }

  get numbers() {
    return this.#numbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinNumber;
