import { SYMBOL } from '../../../../constants/System.js';

/**
 *
 * @param input
 */
export default function isEmptyString(input) {
  return input.trim() === SYMBOL.emptyString;
}
