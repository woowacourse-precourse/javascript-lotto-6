import { Random } from '@woowacourse/mission-utils';

/**
 * @param {number} startNum
 * @param {number} endNum
 * @param {number} amount
 * @returns {number[]}
 */
const generateRandomNumbers = (startNum, endNum, amount) =>
  Random.pickUniqueNumbersInRange(startNum, endNum, amount);

/**
 * @param {number} startNum
 * @param {number} endNum
 * @param {number} amount
 * @returns {number[]}
 */
const getRandomNumbersByAscending = (startNum, endNum, amount) =>
  generateRandomNumbers(startNum, endNum, amount).sort((a, b) => a - b);

export default getRandomNumbersByAscending;
