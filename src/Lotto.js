import {
  validateNumberIsDuplicate,
  validateNumberRange,
  validateNumbersLength,
} from "./validators/lottoValidator.js";

const LOTTO_LENGTH = 6;

const LOTTO_START_INCLUSIVE = 1;
const LOTTO_END_INCLUSIVE = 45;

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    validateNumbersLength(numbers, LOTTO_LENGTH);
    validateNumberRange(numbers, LOTTO_START_INCLUSIVE, LOTTO_END_INCLUSIVE);
    validateNumberIsDuplicate(numbers);
  }
}

export default Lotto;
