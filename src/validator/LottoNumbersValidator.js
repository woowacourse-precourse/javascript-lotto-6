import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { LOTTO_MAGICNUMBER } from '../constants/LottoOption.js';
import ValidationError from '../error/ValidationError.js';
import { DIVIDER } from '../constants/Symbol.js';

const checkValidDivider = (input) => {
  if (input.length !== LOTTO_MAGICNUMBER.selectAmount) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidDivider);
  }
};

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

const checkValidNumber = (input) => {
  input.forEach((number) => {
    if (!Number.isInteger(number)) {
      throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumber);
    }
  });
};

const checkDuplicationNumber = (input) => {
  const numberSet = new Set(input);

  if (numberSet.size !== input.length) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidLottoNumber);
  }
};

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
