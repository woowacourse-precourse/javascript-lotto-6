/**
 * 배열에 constructor의 instance가 아닌 값이 존재하는지 판별합니다.
 * @param {unknown[]} instances 체크할 배열입니다.
 * @param {Function} constructor 체크할 클래스입니다.
 * @returns {boolean} instance가 아닌 값의 존재여부입니다.
 */
export const invalidInstanceElement = (instances, constructor) => {
  const result = instances.some((instance) => !(instance instanceof constructor));
  return result;
};

/**
 *  배열에 중복된 값이 존재하는지 판별합니다.
 * @param {any[]} array 체크할 배열입니다.
 * @returns {boolean} 중복여부입니다.
 */
export const isDuplicated = (array) => new Set(array).size !== array.length;

/**
 *  값이 범위를 초과하였는지 판별합니다.
 * @param {number} value 체크할 값입니다.
 * @param {{ min: number, max: number}} range 유효 범위입니다.
 * @returns {boolean} 범위 초과 여부입니다.
 */
export const isOutOfRange = (value, { min, max }) => value < min || value > max;

/**
 * 값이 특정 값으로 정확이 나누어 떨어지는지 판별합니다.
 * @param {number} value 체크할 값입니다.
 * @param {number} dividedValue 나눌 값입니다.
 * @returns {boolean} 나머지의 존재유무입니다.
 */
export const isIndivisible = (value, dividedValue) => dividedValue % value !== 0;
