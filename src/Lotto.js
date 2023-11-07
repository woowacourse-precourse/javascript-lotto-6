import { MESSAGE } from "./Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MESSAGE.ERROR_LOTTO_NUMBER);
    }

    if (new Set(numbers).size !== 6) {
      throw new Error(MESSAGE.ERROR_NUMBER_DUPLICATED);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
