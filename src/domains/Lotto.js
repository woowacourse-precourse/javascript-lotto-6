import { Random } from '@woowacourse/mission-utils';
import {
  checkDuplicate,
  checkNumberInRange,
  checkSixNumbers,
} from '../utils/validate.js';
import { LOTTO } from '../constants/constants.js';

class Lotto {
  #numbers;

  /** @param {number[]} numbers 로또 번호 */
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 로또 번호에 대한 유효성 검사 함수
   * @param {number[]} numbers
   */
  #validate(numbers) {
    checkSixNumbers(numbers);
    numbers.forEach((number) => checkNumberInRange(number));
    checkDuplicate(numbers);
  }

  /**
   * 로또 구매(생성) 함수
   * @returns {number[]}
   */
  static buyLotto() {
    const { START, END, LENGTH } = LOTTO;
    const lotto = Random.pickUniqueNumbersInRange(START, END, LENGTH);
    return lotto.sort((nxt, cur) => nxt - cur);
  }

  /** @returns {number[]} 로또 번호 리턴 */
  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
