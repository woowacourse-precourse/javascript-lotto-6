import { ERROR_MESSAGE } from "./constant/ErrorMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_NOT_SIX_DIGITS);
    }

    if (numbers.some((number) => number > 45 || number < 1)) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_OUT_OF_RANGE);
    }

    if ((new Set(numbers)).size !== numbers.length) {
      throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_NOT_UNIQUE);
    }
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  numbers() {
    return this.#numbers;
  }
}

export default Lotto;
