/**
 * 수익률 계산기
 * @param {number} netProfit
 * @param {number} round
 * @returns {number}
 */
export const CalculateYield = (netProfit, round) => {
  const result = (netProfit / round).toFixed(2);
  return result;
};

/**
 * 문자열
 * @param {number[]} numbers
 * @returns {boolean}
 */
export const IsUniqueNumbersInArray = (list) => {
  const numbers = list.map((num) => IsNumber(num));
  const uniqNum = new Set(numbers);
  if (numbers.length === uniqNum.length) return true;
  if (numbers.length !== uniqNum.length) return false;

  return false;
};

/**
 * 숫자로만 이루어졌는지 확인
 * @param {*[]} list
 * @returns {boolean}
 */
export const IsNumbersInArray = (list) => {
  const result = list.every((num) => IsNumber(num));
  return result;
};

/**
 * 0-9까지의 숫자로만 이루어졌는지 확인하는 함수
 * @param {*} value
 * @returns {boolean}
 */
export const IsNumber = (value) => {
  return /^[0-9]+$/.test(value);
};
