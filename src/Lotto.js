import { MESSAGES } from "./Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some(number => isNaN(number))) {
      throw new Error(MESSAGES.NUMBER_ERROR);
    } else if (numbers.length !== 6) {
      throw new Error(MESSAGES.COUNT_ERROR);
    } else if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error(MESSAGES.RANGE_ERROR);
    } else if (new Set(numbers).size !== 6) {
      throw new Error(MESSAGES.DUPLICATION_ERROR);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
