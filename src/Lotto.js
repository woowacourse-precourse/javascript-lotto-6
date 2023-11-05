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

    if (!numbers.every((n) => !isNaN(n))) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ERROR.NO_DUPLICATES);
    }

    if (!numbers.every((n) => n >= 1 && n <= 45)) {
      throw new Error(ERROR.NUMBER_RANGE);
    }

    if (numbers.some((n) => !n)) {
      throw new Error(ERROR.EMPTY_VALUE);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
