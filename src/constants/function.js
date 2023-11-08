import { LOTTO_COUNT } from './number';

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
const LOTTO_MATCHERS = [
  (mainMatched) => mainMatched === LOTTO_COUNT - 3,
  (mainMatched) => mainMatched === LOTTO_COUNT - 2,
  (mainMatched, isBonusMatched) => !isBonusMatched && mainMatched === LOTTO_COUNT - 1,
  (mainMatched, isBonusMatched) => isBonusMatched && mainMatched === LOTTO_COUNT - 1,
  (mainMatched) => mainMatched === LOTTO_COUNT,
];

export default LOTTO_MATCHERS;
