import { ERRORS } from "./contants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERRORS.SIX_NUMBER);
    }

    const isAllNumbers = numbers.every((item) => !isNaN(item));
    if (!isAllNumbers) {
      throw new Error(ERRORS.ONLY_NUMBER);
    }

    if (numbers.length !== new Set([...numbers]).size) {
      throw new Error(ERRORS.NOT_DUPLICATE);
    }

    const isAllCorrectRange = numbers.every((item) => item > 0 && item <= 45);
    if (!isAllCorrectRange) {
      throw new Error(ERRORS.OUT_OF_RANGE);
    }
  }

  getCorrectNumber() {
    return this.#numbers;
  }
}

export default Lotto;
