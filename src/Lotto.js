import { ERROR } from './constant/index.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_NUMBERS.LENGTH);
    }

    const isInvalidRange = numbers.some(number => number < 1 || number > 45);
    if (isInvalidRange) {
      throw new Error(ERROR.LOTTO_NUMBERS.RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR.LOTTO_NUMBERS.UNIQE);
    }
  }
}

export default Lotto;
