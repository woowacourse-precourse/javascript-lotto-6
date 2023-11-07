import CustomError from './customs/CustomError.js';
import ERROR_MESSAGE from './constants/error.js';
import ArrayValidator from './validators/ArrayValidator.js';
import { LOTTO_RANGE } from './constants/number.js';

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
    if (!ArrayValidator.isArrayOfLength(numbers, 6)) {
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

  // TODO: 추가 기능 구현
}

export default Lotto;
