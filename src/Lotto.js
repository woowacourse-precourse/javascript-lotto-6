import { Random } from "@woowacourse/mission-utils";
import Validation from "./Validation";

class Lotto {
  /**@type {number[]} */
  #numbers;

  /**
   * @constructor
   * @param {number[]} numbers
   */

  constructor(numbers) {
    Validation.validateLottoNumbers(number);
    this.#numbers = numbers;
  }

  /**
   *
   * @returns {number[]}
   */
  static pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(...[1, 45], 6).sort((a, b) => a - b);
  }
}

export default Lotto;
