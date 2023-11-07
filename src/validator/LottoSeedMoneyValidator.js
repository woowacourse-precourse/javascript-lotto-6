import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { LOTTO_PRICE } from '../constants/LottoOption.js';
import ValidationError from '../error/ValidationError.js';
import validateCommon from './CommonValidator.js';

/**
 * @param {number} input
 * @throws {ValidationError}
 */
const checkValidCharacter = (input) => {
  if (Number.isNaN(input)) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidCharacter);
  }
};

/**
 * @param {number} input
 * @throws {ValidationError}
 */
const checkValidSeedMoney = (input) => {
  if (input % LOTTO_PRICE > 0) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidSeedMoney);
  }
};

/**
 * @param {number} input
 * @throws {ValidationError}
 */
const checkValidInteger = (input) => {
  if (input < 0) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidInteger);
  }
};

/**
 * @param {string} seedMoney
 */
const validateLottoSeedMoney = (seedMoney) => {
  const number = Number(seedMoney);

  validateCommon(seedMoney);
  checkValidCharacter(number);
  checkValidSeedMoney(number);
  checkValidInteger(number);
};

export default validateLottoSeedMoney;
