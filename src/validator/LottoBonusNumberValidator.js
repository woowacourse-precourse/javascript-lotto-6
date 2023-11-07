import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { LOTTO_MAGICNUMBER } from '../constants/LottoOption.js';
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
const checkValidNumber = (input) => {
  if (!Number.isInteger(input)) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumber);
  }
};

/**
 * @param {number} input
 * @throws {ValidationError}
 */
const checkValidRange = (input) => {
  if (
    input > LOTTO_MAGICNUMBER.maxValue ||
    input < LOTTO_MAGICNUMBER.minValue
  ) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumberRange);
  }
};

/**
 * @param {number} input
 * @param {number[]} lottoNumbers
 * @throws {ValidationError}
 */
const checkDuplicationNumber = (input, lottoNumbers) => {
  if (lottoNumbers.includes(input)) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidLottoNumber);
  }
};

/**
 * @param {number[]} lottoNumbers
 * @param {string} lottoBonusNumber
 */
const validateLottoBonusNumber = (lottoNumbers, lottoBonusNumber) => {
  const number = Number(lottoBonusNumber);

  validateCommon(lottoBonusNumber);
  checkValidCharacter(number);
  checkValidNumber(number);
  checkValidRange(number);
  checkDuplicationNumber(number, lottoNumbers);
};

export default validateLottoBonusNumber;
