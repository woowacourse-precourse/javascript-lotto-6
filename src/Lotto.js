import { ERROR } from './constant/index';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.LOTTO_NUMBERS_LENGTH);
    }

    const INVALID_RANGE = numbers.some(number => number < 1 || number > 45);
    if (INVALID_RANGE) {
      throw new Error(ERROR.LOTTO_NUMBERS_RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERROR.LOTTO_NUMBERS_UNIQE);
    }
  }
}

export default Lotto;
