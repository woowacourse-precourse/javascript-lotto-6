import { Random } from '@woowacourse/mission-utils';
import { OPTION } from './Constant.js';
import Validation from './Validation.js';

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
   * 해당 로또의 번호와 입력받은 로또 번호 일치하는 개수 구하기
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
   * 해당 로또의 당첨 등수 구하기, 낙첨 시 0 리턴.
   * @param {number[]} numbers
   * @param {number} bonus
   * @returns {number}
   */
  getRank(numbers, bonus) {
    const match = this.getMatchNumberCount(numbers);

    if (match <= OPTION.BALL_COUNT - OPTION.WINNING_RANKING + 1) {
      return 0;
    }
    if (match === OPTION.BALL_COUNT) {
      return 1;
    }
    if (match === OPTION.BALL_COUNT - 1 && this.#numbers.includes(bonus)) {
      return 2;
    }
    return OPTION.BALL_COUNT - match + 2;
  }

  /**
   * 로또 게임 번호
   * @returns {number[]}
   */
  getNumbers() {
    return Object.freeze(this.#numbers);
  }
}

export default Lotto;
