//@ts-check

import Assert from "./Assert.js";

class Lotto {
  #numbers;

  /**
   *
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
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

  /**
   *
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  matchResult(winningNumbers, bonusNumber) {
    const matched = this.#numbers.filter((num) => winningNumbers.includes(num));
    const isBounsMatched = this.#numbers.includes(bonusNumber);

    if (matched.length === 6) return "six";
    if (matched.length === 5 && isBounsMatched) return "bonusFive";
    if (matched.length === 5) return "five";
    if (matched.length === 4) return "four";
    if (matched.length === 3) return "three";
    return null;
  }
}

export default Lotto;
