import {
  SIX_NUMBERS_ERROR_MESSAGE,
  DUPLICATE_ERROR_MESSAGE,
  INTEGER_ERROR_MESSAGE,
  INRANGE_ERROR_MESSAGE,
  ASCENDING_ORDER_ERROR_MESSAGE,
} from './constants/errorMessage';

class Lotto {
  #numbers;

  constructor(numbers) {
    Lotto.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  static #validate(numbers) {
    Lotto.#isSixNumbers(numbers);
    Lotto.#isDuplicate(numbers);
    Lotto.#isIneger(numbers);
    Lotto.#isInRange(numbers);
    Lotto.#isAscendingOrder(numbers);
  }

  static #isSixNumbers(numbers) {
    if (numbers.length !== 6) {
      Lotto.#throwError(SIX_NUMBERS_ERROR_MESSAGE);
    }
  }

  static #isDuplicate(numbers) {
    if (new Set([...numbers]).size !== numbers.length) {
      Lotto.#throwError(DUPLICATE_ERROR_MESSAGE);
    }
  }

  static #isIneger(numbers) {
    if (!numbers.every((number) => Number.isInteger(number))) {
      Lotto.#throwError(INTEGER_ERROR_MESSAGE);
    }
  }

  static #isInRange(numbers) {
    if (!numbers.every((number) => number >= 1 && number <= 45)) {
      Lotto.#throwError(INRANGE_ERROR_MESSAGE);
    }
  }

  static #isAscendingOrder(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const isEqual = (a, b) => a === b;
    if (
      !numbers.every((number, index) => isEqual(number, sortedNumbers[index]))
    ) {
      Lotto.#throwError(ASCENDING_ORDER_ERROR_MESSAGE);
    }
  }

  static #throwError(errorMessage) {
    throw new Error(`[ERROR] ${errorMessage}`);
  }
}

export default Lotto;
