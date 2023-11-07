import { throwError, conditions } from '../util/Validator.js';
import ERROR from '../constants/Error.js';

const { LOTTO_RANGE, LOTTO_LENGTH, LOTTO_DUPLICATE } = ERROR;
const { isCorrectLength, isDuplicate, isInRange } = conditions;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#formatAscending(numbers);
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  #validateLength(numbers) {
    throwError(LOTTO_LENGTH, isCorrectLength(numbers));
  }

  #validateDuplicate(numbers) {
    throwError(LOTTO_DUPLICATE, isDuplicate(numbers));
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      throwError(LOTTO_RANGE, isInRange(number));
    });
  }

  #formatAscending(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbersToString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
