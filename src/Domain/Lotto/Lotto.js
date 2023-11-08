import AppError from '../../errors/error.js';
import CONSTANTS from '../../Lib/constans.js';
import ERROR from '../../Lib/error.js';
import { isValidNumber } from './utils.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#checkNumberLimit(numbers);
    this.#checkNumberRange(numbers);
    this.#checkDuplicateNumber(numbers);
  }

  #checkNumberLimit(numbers) {
    if (numbers.length !== CONSTANTS.number.limit) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }
  }

  #checkNumberRange(numbers) {
    if (!numbers.every(isValidNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }
  }

  #checkDuplicateNumber(numbers) {
    if (new Set(numbers).size !== CONSTANTS.number.limit) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
