import CustomError from './Errors';
import { ERROR_MESSAGE } from './Define';

const purchaseAmount = (input) => {
  if (!/^\d000$/.test(String(input))) {
    throw CustomError.userInputError(ERROR_MESSAGE.invalidAmountError);
  }
  return true;
};

const lottoNumbers = (input) => {
  if (!/^(\d+)(,\d+)*$/.test(String(input))) {
    throw CustomError.lottoValidateError(ERROR_MESSAGE.invalidInputNumbers);
  }
  return true;
};
const bonusNumber = (input) => {
  if (!Number(input)) {
    throw CustomError.lottoValidateError(ERROR_MESSAGE.invalidInputBonusNumber);
  }
  return true;
};

const InputValidator = {
  purchaseAmount,
  lottoNumbers,
  bonusNumber,
};

export default InputValidator;
