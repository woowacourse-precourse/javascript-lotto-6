import { ERROR_MESSAGE } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const hasNaN = numbers.some(isNaN);
    const hasNonInteger = numbers.some(number => number !== parseInt(number));
    const hasInvalidRange = numbers.some(number => number < 1 || number > 45);
    const hasDuplicates = new Set(numbers).size !== numbers.length;

    if (hasNaN) {
      throw new Error(ERROR_MESSAGE.LOTTO_FORMAT_ERROR);
    }
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_COUNT_ERROR);
    }
    if (hasNonInteger) {
      throw new Error(ERROR_MESSAGE.LOTTO_INTEGER_FORMAT_ERROR);
    }
    if (hasInvalidRange) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
    }
    if (hasDuplicates) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATE_ERROR);
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
