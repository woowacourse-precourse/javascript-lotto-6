import { ERROR_MESSAGE } from './constants/message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.validateLength(numbers);
    this.validateNumbers(numbers);
    this.validateDuplicates(numbers);
  }

  validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBERS_LENGTH);
    }
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if (typeof number !== 'number' || Number.isNaN(number)) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INPUT);
      }
      if (number > 45 || number < 1) {
        throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
      }
    });
  }

  validateDuplicates(numbers) {
    const setOfNumbers = new Set(numbers);
    if (setOfNumbers.size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBERS);
    }
  }

  getWinningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
