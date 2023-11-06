import { ERROR_MESSAGE } from "../constant/ERROR_MESSAGE";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH_ERROR);
    }
  }

  #validateDuplicate(numbers) {
    const setNumbers = new Set(numbers);
    if (setNumbers.length !== numbers.length) {
      throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE_ERROR);
    }
  }

  getLotto() {
    return this.#numbers
  }
}

export default Lotto;
