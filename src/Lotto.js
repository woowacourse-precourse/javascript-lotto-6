import { ERROR_MESSAGE } from './constants/Messages.js';
import { LOTTO_RULES, NUMERIC_PATTERN } from './constants/Rules.js';

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
    numbers.forEach((number) => {
      if (!NUMERIC_PATTERN.test(number)) {
        throw new Error(ERROR_MESSAGE.numericOnly);
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
      if (number < LOTTO_RULES.minNumber || number > LOTTO_RULES.maxNumber) {
        throw new Error(ERROR_MESSAGE.lottoNumber.notInRange);
      }
    });
  }
}

export default Lotto;
