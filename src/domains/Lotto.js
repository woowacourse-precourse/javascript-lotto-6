import { Console } from '@woowacourse/mission-utils';
import LOTTO_CONFIG from '../constants/lotto.js';
import Validator from '../utils/Validator.js';

class Lotto {
  /**
   * @type {number[]}
   */
  #numbers;

  /**
   * Lotto Numbers
   * @param {number[]} numbers
   */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.validInputLottoType(numbers);
    Validator.validInputLottoScope(numbers);
    Validator.validInputLottoLength(numbers);
    Validator.validInputNumbersDuplicate(numbers);
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(', ')}]`);
  }

  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  getRank(winningNumbers, bonusNumber) {
    let count = 0;

    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) count += 1;
    });

    if (count === 6) return 1;

    if (count === 5 && this.#numbers.includes(bonusNumber)) return 2;

    return 8 - count;
  }
}

export default Lotto;
