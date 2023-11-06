import { LOTTO_ERROR_MESSAGE } from "./Constants/Error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNumbers();
  }

  #validate(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR_MESSAGE.notSixNumbers);
    }
    if (numbers.length !== set.size) {
      throw new Error(LOTTO_ERROR_MESSAGE.hasDuplicates);
    }
    if (!numbers.every(number => number >= 1 && number <= 45)) {
      throw new Error(LOTTO_ERROR_MESSAGE.notInRange);
    }
  }

  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
