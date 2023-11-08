import { MIN_NUMBER, MAX_NUMBER, COUNT_NUMBER, ERRORS } from './constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== COUNT_NUMBER) {
      throw new Error(ERRORS.InvalidWinNumbersCount);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERRORS.InvalidDuplicateNumber);
    }
    numbers.forEach((num) => {
      if (num < MIN_NUMBER || num > MAX_NUMBER) {
        throw new Error(ERRORS.InvalidRange);
      }
    });
  }
}

export default Lotto;
