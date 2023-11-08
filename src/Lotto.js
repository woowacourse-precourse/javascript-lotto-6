import { ERROR_MESSAGE } from './constants/constants.js';

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

    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE);
    }

    if (
      !numbers.every(
        (number) => Number.isInteger(number) && number > 0 && number <= 45,
      )
    ) {
      throw new Error(ERROR_MESSAGE.LOTTO_RANGE);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
