import CONSTANTS from '../../Lib/constans.js';

/**
 * 주어진 숫자가 1부터 45 사이의 정수인지 확인하는 함수
 *
 * @param {number} num - 확인하고자 하는 숫자
 * @returns {boolean} 숫자가 1부터 45 사이의 정수이면 true, 그렇지 않으면 false
 */
export const isValidNumber = (num) => {
  return Number.isInteger(num) && num >= CONSTANTS.number.min && num <= CONSTANTS.number.max;
};
