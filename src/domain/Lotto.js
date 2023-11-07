class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateType(numbers);
    this.validateLength(numbers);
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
  }

  // TODO: 추가 기능 구현
  validateType(numbers) {
    const NOT_NUMBERS = numbers.filter((number) => {
      return isNaN(number);
    });
    if (NOT_NUMBERS.length != 0) throw new Error('[ERROR] 당첨 번호는 숫자로 이루어져야 합니다.');
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45)
        throw new Error('[ERROR] 당첨 번호는 1과 45 사이 숫자여야 합니다.');
    });
  }

  validateDuplicate(numbers) {
    const deletedDuplicate = new Set(numbers);
    if (deletedDuplicate.size !== numbers.length) {
      throw new Error('[ERROR] 당첨 번호는 중복되지 않아야 합니다.');
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
