import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { LOTTO_MAGICNUMBER } from '../constants/LottoOption.js';
import ValidationError from '../error/ValidationError.js';
import validateCommon from './CommonValidator.js';

/**
 * @public
 * @param {number} input
 * @throws {ValidationError}
 */
const checkValidNumber = (input) => {
  if (!Number.isInteger(input)) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumber);
  }
};

/**
 * @public
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
 * @public
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
 * @public
 * @param {number[]} lottoNumbers
 * @param {string} lottoBonusNumber
 */
const validateLottoBonusNumber = (lottoNumbers, lottoBonusNumber) => {
  const number = Number(lottoBonusNumber);

  validateCommon(lottoBonusNumber);
  checkValidNumber(number);
  checkValidRange(number);
  checkDuplicationNumber(number, lottoNumbers);
};

export default validateLottoBonusNumber;
