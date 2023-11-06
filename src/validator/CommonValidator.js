import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { SYMBOL } from '../constants/Symbol.js';
import ValidationError from '../error/ValidationError.js';

/**
 * @throws {ValidationError}
 * @param {string} input
 */
const checkInputEmpty = (input) => {
  if (input === SYMBOL.empty) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.emptyInput);
  }
};

/**
 * @param {string} input - 검사할 문자열
 */
const validateCommon = (input) => {
  const trimmedInput = input.trim();
  checkInputEmpty(trimmedInput);
};

export default validateCommon;
