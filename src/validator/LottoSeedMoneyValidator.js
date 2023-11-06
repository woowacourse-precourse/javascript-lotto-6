import { LOTTO_ERROR_MESSAGE } from '../constants/LottoMessage.js';
import { LOTTO_PRICE } from '../constants/LottoOption.js';
import ValidationError from '../error/ValidationError.js';
import validateCommon from './CommonValidator.js';

const checkValidChracter = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidCharacter);
  }
};

const checkValidSeedMoney = (input) => {
  if (Number(input) % LOTTO_PRICE > 0) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidSeedMoney);
  }
};

const checkValidNumber = (input) => {
  if (!Number.isInteger(Number(input))) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidNumber);
  }
};

const checkValidInteger = (input) => {
  if (Number(input) < 0) {
    throw new ValidationError(LOTTO_ERROR_MESSAGE.notAValidInteger);
  }
};

const validateLottoSeedMoney = (input) => {
  validateCommon(input);
  checkValidChracter(input);
  checkValidSeedMoney(input);
  checkValidNumber(input);
  checkValidInteger(input);
};

export default validateLottoSeedMoney;
