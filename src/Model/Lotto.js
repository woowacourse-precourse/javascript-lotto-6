import { throwError, Conditions } from '../util/Validator.js';
import ERROR from '../constants/Error.js';

const { LOTTO_NUMBER, LOTTO_RANGE, LOTTO_LENGTH, LOTTO_DUPLICATE } = ERROR;
const { isCorrectLength, isDuplicate, isInRange, isPositiveInteger } =
  Conditions;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#formatAscending(numbers);
  }

  #validate(numbers) {
    this.#validatePositiveInteger(numbers);
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  #validatePositiveInteger(numbers) {
    numbers.forEach((number) => {
      throwError(LOTTO_NUMBER, isPositiveInteger(number));
    });
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

  isInclude(number) {
    return this.#numbers.includes(number);
  }

  getNumbersToString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getNumbers() {
    return this.#numbers.map(Number);
  }
}

export default Lotto;
