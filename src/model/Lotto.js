import { ERROR } from '../constants/Message.js';
import { STANDARD } from '../constants/Standard.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumber(numbers);
    this.#validateDuplication(numbers);
    this.#validateLength(numbers);
    this.#validateRange(numbers);
  }

  #validateNumber(numbers) {
    const isAllNumbers = numbers.every((item) => !isNaN(item));

    if (!isAllNumbers) {
      throw new Error(ERROR.NUMBER);
    }
  }

  #validateDuplication(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.DUPLICATION);
    }
  }

  #validateLength(numbers) {
    if (numbers.length !== STANDARD.LOTTO_MAX_COUNT) {
      throw new Error(ERROR.LENGTH);
    }
  }

  #validateRange(numbers) {
    const isAllCorrectRange = numbers.every(
      (item) => item >= STANDARD.LOTTO_MIN_NUMBER && item <= STANDARD.LOTTO_MAX_NUMBER
    );

    if (!isAllCorrectRange) {
      throw new Error(ERROR.RANGE);
    }
  }

  getLottoNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
