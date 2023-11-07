/* eslint-disable no-unused-vars */
import { Console } from '@woowacourse/mission-utils';
import DongHang from './DongHang.js';
import ERROR_MESSAGE from './constants/error.js';
import { LOTTO_COUNT, LOTTO_PRICE } from './constants/number.js';
import CustomError from './customs/CustomError.js';
import Input from './utils/Input.js';
import PROMPT from './constants/prompt.js';
import NumberValidator from './validators/NumberValidator.js';
import Lotto from './Lotto.js';

/**
 * @classdesc 복권 구매자
 * 구매자는 구매, 확인 두가지 행동을 할 수있다.
 */
class User {
  /**
   * @type {Lotto[]}
   */
  #lottos;

  /**
   * 등수
   * @type {number[]}
   * @example [0, 0, 0, 0, 0] // 1등, 2등, 3등, 4등, 5등
   */
  #statistics = [0, 0, 0, 0, 0];

  /**
   * @type {Function[]} 등수를 판별하는 함수들
   * @example
   * [
   *  1등 - 6개 일치,
   *  2등 - 5개 일치, 보너스 볼 일치,
   *  3등 - 5개 일치,
   *  4등 - 4개 일치,
   *  5등 - 3개 일치,
   * ]
   */
  #matcher = [
    (mainMatched) => mainMatched === LOTTO_COUNT - 3,
    (mainMatched) => mainMatched === LOTTO_COUNT - 2,
    (mainMatched, isBonusNumberMatched) => !isBonusNumberMatched && mainMatched === LOTTO_COUNT - 1,
    (mainMatched, isBonusNumberMatched) => isBonusNumberMatched && mainMatched === LOTTO_COUNT - 1,
    (mainMatched) => mainMatched === LOTTO_COUNT,
  ];

  #statisticsMap = [
    (count) => `3개 일치 (5,000원) - ${count}개`,
    (count) => `4개 일치 (50,000원) - ${count}개`,
    (count) => `5개 일치 (1,500,000원) - ${count}개`,
    (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  ];

  /**
   * 로또를 구매하는 메서드
   */
  async buy() {
    const money = await Input.readIntegerAsync(PROMPT.BUY_COST);

    if (!NumberValidator.isDivisibleBy(money, LOTTO_PRICE)) {
      throw new CustomError(ERROR_MESSAGE.NOT_DIVISIBLE_BY_LOTTO_PRICE);
    }

    this.#lottos = DongHang.issue(money);
  }

  /**
   * @param {Object} winnningNumbers
   * @param {number[]} winnningNumbers.mainNumbers
   * @param {number} winnningNumbers.bonusNumber
   */
  checkAll(winningNumbers) {
    this.#lottos.forEach((lotto) => {
      const result = lotto.check(winningNumbers);
      const rank = this.#rank(result);

      if (rank > -1) this.#statistics[rank] += 1;
    });
  }

  /**
   * matcher를 이용하여 등수를 판별하는 메서드
   *
   * @example
   * -1: 등수가 아님
   * 0: 5등
   * 1: 4등
   * 2: 3등
   * 3: 2등
   * 4: 1등
   * @param {Object} winnningNumbers
   * @param {number} winnningNumbers.matchingMain
   * @param {boolean} winnningNumbers.isBonusNumberMatched
   */
  #rank({ matchingMain, isBonusNumberMatched }) {
    return this.#matcher.findIndex((evaluate) => evaluate(matchingMain, isBonusNumberMatched));
  }

  printStatistics() {
    const stats = this.#statisticsMap.map((formatter, index) => formatter(this.#statistics[index]));
    stats.forEach((stat) => Console.print(stat));
  }
}

export default User;
