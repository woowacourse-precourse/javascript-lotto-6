import { ERROR_MESSAGE } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_LENGTH);
    }

    const SET_NUMBERS = new Set(numbers);
    if (SET_NUMBERS.size !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_DUPLICATE);
    }

    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.LOTTO_NUMBERS_RANGE);
      }
    });
  }
}

export default Lotto;
