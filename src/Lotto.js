import { ERROR_MESSAGE, ERROR_MESSAGE_FUNCTION } from './constants/Messages.js';
import handleValidationError from './utils/error/index.js';
import {
  isDuplication,
  isInteger,
  isNumber,
  isNumberValidScope,
} from './utils/validators/index.js';

class Lotto {
  /**
   * @private
   * @type {number[]}
   */
  #numbers;

  /**
   * @param {string} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = Lotto.convertNumber(numbers);
  }

  static convertNumber(input) {
    return input.map(Number);
  }

  static of(numbers) {
    return new Lotto(numbers);
  }

  // why? Private method
  // eslint-disable-next-line class-methods-use-this
  #validate(numbers) {
    if (!numbers.every(isNumber)) handleValidationError(ERROR_MESSAGE.number);
    if (!numbers.every(isInteger)) handleValidationError(ERROR_MESSAGE.integer);
    if (numbers.length !== 6) handleValidationError(ERROR_MESSAGE.count);
    if (isDuplication(numbers)) handleValidationError(ERROR_MESSAGE.duplication);
    if (!numbers.every((number) => isNumberValidScope(number))) {
      handleValidationError(ERROR_MESSAGE_FUNCTION.validScope());
    }
  }

  isDuplicatedWinningNumbers(bonusNumber) {
    return this.#numbers.includes(Number(bonusNumber));
  }
}

export default Lotto;
