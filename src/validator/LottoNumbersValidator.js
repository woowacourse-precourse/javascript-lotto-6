import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { LOTTO_MAGICNUMBER } from '../constants/LottoOption.js';
import ValidationError from '../error/ValidationError.js';
import { DIVIDER } from '../constants/Symbol.js';

/**
 * @public
 * @param {number[]} input
 * @throws {ValidationError}
 */
const checkValidDivider = (input) => {
  if (input.length !== LOTTO_MAGICNUMBER.selectAmount) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidDivider);
  }
};

/**
 * @public
 * @param {number[]} input
 * @throws {ValidationError}
 */
const checkValidNumberRange = (input) => {
  input.forEach((number) => {
    if (
      number > LOTTO_MAGICNUMBER.maxValue ||
      number < LOTTO_MAGICNUMBER.minValue
    ) {
      throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumberRange);
    }
  });
};

/**
 * @public
 * @param {number[]} input
 * @throws {ValidationError}
 */
const checkValidNumber = (input) => {
  input.forEach((number) => {
    if (!Number.isInteger(number)) {
      throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumber);
    }
  });
};

/**
 * @public
 * @param {number[]} input
 * @throws {ValidationError}
 */
const checkDuplicationNumber = (input) => {
  const numberSet = new Set(input);

  if (numberSet.size !== input.length) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidLottoNumber);
  }
};

/**
 * @public
 * @param {Object | string} lottoNumbers
 */
const validateLottoNumbers = (lottoNumbers) => {
  const splitLottoNumbers =
    typeof lottoNumbers === 'object'
      ? lottoNumbers
      : lottoNumbers.split(DIVIDER.comma).map(Number);

  checkValidDivider(splitLottoNumbers);
  checkValidNumber(splitLottoNumbers);
  checkValidNumberRange(splitLottoNumbers);
  checkDuplicationNumber(splitLottoNumbers);
};

export default validateLottoNumbers;
