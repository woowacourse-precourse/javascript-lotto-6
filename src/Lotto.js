import ERROR from './constants/Error.js';
import { matchArrays } from './utils/arrayUtils.js';
import errorFormat from './utils/error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers) {
      throw new Error(errorFormat(Error));
    }

    if (numbers.length !== 6) {
      throw new Error(errorFormat(ERROR.INPUT_NUMBERS.INVALID_LENGTH));
    }

    if (numbers.some(item => item < 1 || item > 45)) {
      throw new Error(errorFormat(ERROR.INPUT_NUMBERS.INVALID_NUMBER_RANGE));
    }

    if (numbers.some((item, index) => index !== numbers.lastIndexOf(item))) {
      throw new Error(errorFormat(ERROR.INPUT_NUMBERS.DUPLICATE_VALUE));
    }
  }

  getNumberList() {
    return this.#numbers;
  }

  getString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  matchLotto(winningNumbers, bonusNumber) {
    const matchCount = matchArrays(this.#numbers, winningNumbers).length;
    const isMatchBonus = this.#numbers.includes(bonusNumber);

    return [matchCount, isMatchBonus];
  }
}

export default Lotto;
