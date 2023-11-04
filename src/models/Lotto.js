import { Random } from '@woowacourse/mission-utils';
import { OPTION } from '../constants/Lotto.js';
import Validation from '../validations/Lotto.js';

class Lotto {
  /** @type {number[]} */
  #numbers;

  /**
   * @constructor
   * @param {number[]} numbers
   */
  constructor(numbers) {
    Validation.validateLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  /**
   * 로또 자동 발급 번호를 반환한다.
   * @returns {number[]} 로또 번호
   */
  static pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      ...OPTION.BALL_NUMBER_RANGE,
      OPTION.BALL_COUNT,
    ).sort((a, b) => a - b);
  }

  /**
   * 자동 로또를 여러 장 발급
   * @param {number} money
   * @returns {Lotto[]}
   */
  static buyAutomaticLotto(money) {
    Validation.validateMoney(money);
    return new Array(Math.floor(money / OPTION.LOTTO_PRICE))
      .fill(0)
      .map(() => new Lotto(Lotto.pickRandomNumbers()));
  }

  /**
   * 해당 로또의 번호와 입력받은 로또 번호의 일치하는 개수 구하기
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
}

export default Lotto;
