import { ERROR_MESSAGE } from './constants/Messages.js';

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
      throw new Error(ERROR_MESSAGE.lottoNumber.count);
    }
  }

  // TODO: 추가 기능 구현
  #duplicateCheck(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (numbers.length !== uniqueNumbers.size) {
      throw new Error(ERROR_MESSAGE.lottoNumber.duplication);
    }
  }

  #numericValidate(numbers) {
    const DIGITS_ONLY_PATTERN = /^\d+$/;
    numbers.forEach((number) => {
      if (!DIGITS_ONLY_PATTERN.test(number)) {
        throw new Error(ERROR_MESSAGE.lottoNumber.onlyDigit);
      }
    });
  }

  #integerValidate(numbers) {
    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error(ERROR_MESSAGE.lottoNumber.notInt);
      }
    });
  }

  #numberRangeValidate(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.lottoNumber.notInRange);
      }
    });
  }
}

export default Lotto;
