import ERROR_MESSAGE from './constants/ErrorMessage.js';
import Validation from './utils/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH);
    }
    this.#validateStringContained(numbers);
    this.#validateInRange(numbers);
    this.#validateOverlap(numbers);
  }

  #validateOverlap(numbers) {
    if (Validation.overlap(numbers)) {
      throw new Error(ERROR_MESSAGE.LOTTO_NO_OVERLAP);
    }
  }

  #validateStringContained(numbers) {
    if (Validation.stringContained(numbers)) {
      throw new Error(ERROR_MESSAGE.LOTTO_NO_STRING);
    }
  }

  #validateInRange(numbers) {
    if (Validation.inRange(numbers)) {
      throw new Error(ERROR_MESSAGE.LOTTO_IN_RANGE);
    }
  }

  // TODO: 추가 기능 구현
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
