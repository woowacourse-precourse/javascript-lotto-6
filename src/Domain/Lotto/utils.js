import CONSTANTS from '../../Lib/constans.js';

/**
 * 주어진 숫자가 1부터 45 사이의 정수인지 확인하는 함수
 */
export const isValidNumber = (num) => {
  return Number.isInteger(num) && num >= CONSTANTS.number.min && num <= CONSTANTS.number.max;
};
