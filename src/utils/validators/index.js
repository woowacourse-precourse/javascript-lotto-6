import { ERROR_MESSAGE } from '../../constants/Messages.js';
import handleValidationError from '../error/index.js';
import isEmptyString from './src/is-empty-string/index.js';

/**
 *
 * @param {string} input
 */
export default function checkEmptyString(input) {
  if (isEmptyString(input)) {
    handleValidationError(ERROR_MESSAGE.emptyString);
  }
}
