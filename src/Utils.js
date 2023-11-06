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
 * 숫자 배열이 {min} ~ {max} 사이로 이루어졌는지 확인
 * @param {number[]} list
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export const IsNumberInRangeOfArray = (list, min, max) => {
  const result = list.every((num) => IsNumberInRange(num, min, max));
  return result;
};

/**
 * {target}숫자가 0-9까지의 숫자로만 이루어졌는지 확인
 * @param {*} target
 * @returns {boolean}
 */
export const IsNumber = (target) => {
  return /^[0-9]+$/.test(target);
};

/**
 * {target}숫자가 인자 값의 범위의 숫자인지 확인
 * @param {number} target
 * @param {number} min
 * @param {number} max
 * @returns {boolean}
 */
export const IsNumberInRange = (target, min, max) => {
  if (min <= target && target <= max) {
    return true;
  }
  return false;
};
