import { MESSAGES } from "./Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGES.COUNT_ERROR);
    }
    if (numbers.every(number => number < 1 || number > 45)) {
      throw new Error(MESSAGES.RANGE_ERROR);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(MESSAGES.DUPLICATION_ERROR);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
