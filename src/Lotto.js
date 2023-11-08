class Lotto {
  #numbers;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.validateUserBonusNumberInput(bonusNumber);
    this.bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    numbers.forEach((value) => {
      if (Number.isNaN(Number(value)) || value < 1 || value > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
      }
    });
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 숫자가 중복되어서는 안 됩니다.');
    }
  }

  validateUserBonusNumberInput(number) {
    if (Number.isNaN(Number(number)) || number < 1 || number > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.');
    }
    if (this.#numbers.includes(number)) {
      throw new Error('[ERROR] 당첨번호와 중복될 수 없습니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }
}

export default Lotto;
