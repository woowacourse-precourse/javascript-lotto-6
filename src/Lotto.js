import LOTTO from "./constants/lotto.js";
import {
  validateNumbersDuplicate,
  validateNumbersRange,
  validateNumbersLength,
} from "./validators/lotto.js";

class Lotto {
  #numbers;

  /**
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * @returns {number[]}
   */
  getNumbers() {
    return [...this.#numbers];
  }

  /**
   * @param {number[]} numbers
   */
  #validate(numbers) {
    validateNumbersLength(numbers, LOTTO.length);
    validateNumbersRange(
      numbers,
      LOTTO.range.startInclusive,
      LOTTO.range.endInclusive,
    );
    validateNumbersDuplicate(numbers);
  }
}

export default Lotto;
