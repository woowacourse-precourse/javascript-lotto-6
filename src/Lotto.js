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
  /**
   * @param {number[]} numbers
   * @returns {number}
   */
  getMatchNumberCount(numbers) {
    return numbers.reduce((count, number) => {
      if (this.#numbers.includes(number)) {
        return count + 1;
      }
      return count;
    }, 0);
  }

  /**
   * @param {number[]} numbers
   * @param {number} bonus
   * @returns {number}
   */
  getRank(numbers, bonus) {
    const match = this.getMatchNumberCount(numbers);

    if (match <= 6 - 5 + 1) {
      return 0;
    }
    if (match === 6) {
      return 1;
    }
    if (match === 6 - 1 && this.#numbers.includes(bonus)) {
      return 2;
    }
    return 6 - match + 2;
  }
}

export default Lotto;
