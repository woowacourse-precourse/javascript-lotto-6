import { Random } from '@woowacourse/mission-utils';
import { OPTION } from '../constants/Lotto.js';

class Lotto {
  /** @type {number[]} */
  #numbers;

  /**
   * @constructor
   * @param {number[]} numbers
   */
  constructor(numbers) {
    console.log(
      Random.pickUniqueNumbersInRange(
        ...OPTION.BALL_NUMBER_RANGE,
        OPTION.BALL_COUNT,
      ).sort((a, b) => a - b),
    );
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
}

export default Lotto;
