/**
 * 제공된 배열이 숫자만 포함하는지 확인합니다.
 *
 * @param {number[]} arr - 확인할 숫자 배열입니다.
 * @returns {boolean} - 배열이 숫자만 포함하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 */
export const isArrayAllIntegers = (arr) =>
  arr.every((number) => Number.isInteger(number));

/**
 * 제공된 배열이 유일한 숫자만 포함하는지 확인합니다.
 *
 * @param {number[]} arr - 확인할 숫자 배열입니다.
 * @returns {boolean} - 배열이 유일한 숫자만 포함하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 */
export const isArrayOfUniqueNumbers = (arr) => {
  const uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length;
};

/**
 * 제공된 배열의 모든 숫자들이 범위안에 포함되는지 확인합니다.
 *
 * @param {number[]} arr - 확인할 숫자 배열입니다.
 * @param {number} start - 범위의 시작입니다.
 * @param {number} end - 범위의 끝입니다.
 * @returns {boolean} - 배열의 모든 숫자들이 범위안에 포함되면 true를 반환하고, 그렇지 않으면 false를 반환합니다.
 */
export const isArrayOfNumbersInRange = (arr, start, end) =>
  arr.every((number) => number >= start && number <= end);
