/**
 * 배열에 constructor의 instance가 아닌 값이 존재하는지 판별합니다.
 * @param {any[]} array
 * @returns {boolean}
 */
export const invalidInstanceElement = (instances, constructor) => {
  const result = instances.some((instance) => !(instance instanceof constructor));
  return result;
};

/**
 * 배열에 중복된 값이 존재하는지 판별합니다.
 * @param {any[]} array
 * @returns {boolean}
 */
export const isDuplicated = (array) => new Set(array).size !== array.length;

/**
 * 값이 범위를 초과하였는지 판별합니다.
 * @param {number} value
 * @param {{ min: number, max: number}} range
 * @returns {boolean}
 */
export const isOutOfRange = (value, { min, max }) => value < min || value > max;

/**
 * 값이 특정 값으로 정확이 나누어 떨어지는지 판별합니다.
 * @param {number} value
 * @param {number} dividedValue
 * @returns {boolean}
 */
export const isIndivisible = (value, dividedValue) => dividedValue % value !== 0;
