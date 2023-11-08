import CustomError from './Errors';
import { ERROR_MESSAGE } from './Define';

const purchaseAmount = (input) => {
  if (!/^\d000$/.test(String(input))) {
    throw CustomError.userInputError(ERROR_MESSAGE.invalidAmountError);
  }
};

const lottoNumbers = (input) => {
  if (!/^(\d+)(,\d+)*$/.test(String(input))) {
    throw CustomError.lottoValidateError(ERROR_MESSAGE.invalidInputNumbers);
  }
};
const bonusNumber = (input) => {
  if (!Number(input)) {
    throw CustomError.lottoValidateError(ERROR_MESSAGE.invalidInputBonusNumber);
  }
};

const InputValidator = {
  purchaseAmount,
  lottoNumbers,
  bonusNumber,
};

export default InputValidator;
