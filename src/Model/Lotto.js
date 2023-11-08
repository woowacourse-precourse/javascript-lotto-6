import { ERROR } from "../util/Constants";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR.INVALID_DUPLICATION);
    }
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_SIX_NUMBERS);
    }
  }
}

export default Lotto;
