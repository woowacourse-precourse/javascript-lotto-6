import { LOTTO_COUNT, LOTTO_PRIZE } from './constants/number.js';

/**
 * @classdesc 로또 결과를 담당하는 클래스
 */
class LottoResult {
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
    (mainMatched, isBonusMatched) => !isBonusMatched && mainMatched === LOTTO_COUNT - 1,
    (mainMatched, isBonusMatched) => isBonusMatched && mainMatched === LOTTO_COUNT - 1,
    (mainMatched) => mainMatched === LOTTO_COUNT,
  ];

  mainMatchCount = 0;

  isBonusMatched = false;

  rank = -1;

  /**
   * @param {Object} winnningNumbers
   * @param {number[]} winnningNumbers.main
   * @param {number} winnningNumbers.bonus
   */
  constructor({ mainMatchCount, isBonusMatched }) {
    this.mainMatchCount = mainMatchCount;
    this.isBonusMatched = isBonusMatched;
    this.rank = this.getRank();
  }

  /**
   * @returns {number} 당첨금
   */
  getPrize() {
    if (this.rank < 0) return 0;

    return LOTTO_PRIZE[this.rank];
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
   * @param {number} winnningNumbers.mainMatchCount
   * @param {boolean} winnningNumbers.isBonusMatched
   */
  getRank() {
    return this.#matcher.findIndex((test) => test(this.mainMatchCount, this.isBonusMatched));
  }
}

export default LottoResult;
