//@ts-check

import Assert from "./Assert";

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort();
  }

  /**
   *
   * @param {number[]} numbers
   */
  #validate(numbers) {
    const assert = new Assert();
    assert.assertWinningNumber(numbers);
  }

  /**
   *
   * @returns {number[]}
   */
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
