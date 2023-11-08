import { LOTTO } from '../../../../constants/System.js';

/**
 * @param {string} input
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
export default function isNumberValidScope(
  input,
  start = LOTTO.numberRangeStart,
  end = LOTTO.numberRangeEnd,
) {
  return Number(input) >= start && Number(input) <= end;
}
