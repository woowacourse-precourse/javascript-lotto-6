import AppError from '../errors/error.js';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import { isValidNumber } from '../utils/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }

    if (!numbers.every(isValidNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }

    if (new Set(numbers).size !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
