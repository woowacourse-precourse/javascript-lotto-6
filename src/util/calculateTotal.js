import { MATCH_NUMBER } from '../constants/constant.js';

/**
 * 당첨 총 금액을 구합니다.
 * @param {{ three: number, four: number, five: number, fiveAndBonus: number, six: number }} match
 * @return {number} total
 */
const calculateTotal = (match) => {
  const keys = Object.keys(match);
  let total = 0;
  keys.forEach((key) => {
    total += MATCH_NUMBER[key] * match[key];
  });
  return total;
};
export default calculateTotal;
