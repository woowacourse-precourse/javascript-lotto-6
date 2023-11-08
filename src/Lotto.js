import CustomError from './exceptions/CustomError.js';
import ERROR_MESSAGE from './constants/error.js';
import ArrayValidator from './validators/ArrayValidator.js';
import { LOTTO_COUNT, LOTTO_RANGE } from './constants/number.js';

class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * @param {number[]} numbers
   */
  // eslint-disable-next-line class-methods-use-this
  #validate(numbers) {
    if (!ArrayValidator.isArrayOfLength(numbers, LOTTO_COUNT)) {
      throw new CustomError(ERROR_MESSAGE.NOT_IN_LOTTO_COUNT);
    }

    if (!ArrayValidator.isUniqueArray(numbers)) {
      throw new CustomError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }

    if (!ArrayValidator.isSortedArray(numbers)) throw new CustomError(ERROR_MESSAGE.NOT_SORTED);

    if (!ArrayValidator.isInRange(numbers, LOTTO_RANGE)) {
      throw new CustomError(ERROR_MESSAGE.NOT_IN_RANGE);
    }
  }

  /**
   * 일치하는 숫자의 개수를 반환하는 메서드
   * @param {number[]} numbers
   * @returns {number} 일치하는 숫자의 개수
   */
  countMatchingNumbers(numbers) {
    let count = 0;

    numbers.forEach((number) => {
      if (this.#numbers.indexOf(number) > -1) count += 1;
    });

    return count;
  }
}

export default Lotto;
