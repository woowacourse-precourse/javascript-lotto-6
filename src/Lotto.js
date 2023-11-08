import { LOTTO_NUMBERS_COUNT, RANGE_OF_LOTTO_NUMBER } from "./Constants/Constant.js";
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
    if (numbers.length !== LOTTO_NUMBERS_COUNT) {
      throw new Error(LOTTO_ERROR_MESSAGE.notSixNumbers);
    }
    if (numbers.length !== set.size) {
      throw new Error(LOTTO_ERROR_MESSAGE.hasDuplicates);
    }
    if (!numbers.every(number => number >= RANGE_OF_LOTTO_NUMBER.min && number <= RANGE_OF_LOTTO_NUMBER.max)) {
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
