import CustomError from './customs/CustomError';
import ValidatableArray from './validators/ValidatableArray';
import ERROR_MESSAGE from './constants/error';

class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(new ValidatableArray(numbers));
    this.#numbers = numbers;
  }

  /**
   * @param {ValidatableArray} numbers
   */
  // eslint-disable-next-line class-methods-use-this
  #validate(numbers) {
    if (!numbers.isArrayOfLength(6)) throw new CustomError(ERROR_MESSAGE.NOT_IN_LOTTO_COUNT);
    if (!numbers.isSortedArray()) throw new CustomError(ERROR_MESSAGE.NOT_SORTED);
    if (!numbers.isUniqueArray()) throw new CustomError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    if (!numbers.isInRange(1, 45)) throw new CustomError(ERROR_MESSAGE.NOT_IN_RANGE);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
