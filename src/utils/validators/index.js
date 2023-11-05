import isEmptyString from './src/is-empty-string/index.js';

export { default as isDivisibleBy } from './src/is-divisible-by/index.js';
export { default as isEmptyString } from './src/is-empty-string/index.js';
export { default as isNumber } from './src/is-number/index.js';
export { default as isDuplication } from './src/is-duplication/index.js';
export { default as isInteger } from './src/is-integer/index.js';
export { default as isNumberInValidScope } from './src/is-number-in-valid-scope/index.js';

/**
 * @param {string} input
 */
export function validateEmptyString(input) {
  if (isEmptyString(input)) {
    throw new Error('빈문자열은 입력하실 수 없습니다.');
  }
}
