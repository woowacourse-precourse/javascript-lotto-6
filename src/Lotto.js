class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicateCheck(numbers);
    this.#numberRangeValidate(numbers);
    this.#numericValidate(numbers);
    this.#integerValidate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #duplicateCheck(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (numbers.length !== uniqueNumbers.size) {
      throw new Error('[ERROR] 로또 번호가 중복되지 않아야 합니다.');
    }
  }

  #numericValidate(numbers) {
    const DIGITS_ONLY_PATTERN = /^\d+$/;
    numbers.forEach((number) => {
      if (!DIGITS_ONLY_PATTERN.test(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    });
  }

  #integerValidate(numbers) {
    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
      }
    });
  }

  #numberRangeValidate(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.');
      }
    });
  }
}

export default Lotto;
