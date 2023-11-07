import { ERROR } from "./const/Messages.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.HOW_MANY_SIX);
    }

    if (numbers.some((number) => typeof number !== "number" || isNaN(number))) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.NO_DUPLICATES);
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error(ERROR.NUMBER_RANGE);
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  ascendingOrder() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
