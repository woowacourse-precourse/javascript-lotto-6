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

  /**
   * @param {number} money
   * @returns {Lotto[]}
   */
  static buyAutomaticLotto(money) {
    Validation.validateMoney(money);
    return new Array(Math.floor(money / 1000))
      .fill(0)
      .map(() => new Lotto(Lotto.pickRandomNumbers()));
  }
}

export default Lotto;
