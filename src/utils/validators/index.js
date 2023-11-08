import { ERROR_MESSAGE } from '../../constants/Messages.js';

import handleValidationError from '../error/index.js';
import isEmptyString from './src/is-empty-string/index.js';

export { default as isDivisibleBy } from './src/is-divisible-by/index.js';
export { default as isOverMaxPurchaseAmount } from './src/is-over-max-purchase-amount/index.js';
export { default as isNumber } from './src/is-number/index.js';
export { default as isInteger } from './src/is-Integer/index.js';
export { default as isNumberValidScope } from './src/is-number-valid-scope/index.js';
export { default as isDuplication } from './src/is-duplication/index.js';

/**
 *
 * @param {string} input
 */
export default function checkEmptyString(input) {
  if (isEmptyString(input)) {
    handleValidationError(ERROR_MESSAGE.emptyString);
  }
}
