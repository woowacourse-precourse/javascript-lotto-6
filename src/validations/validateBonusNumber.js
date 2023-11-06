import { ERROR_MESSAGES } from '../constants/messages.js';
import CONSTANT_VALIDATE_NUMBER from '../constants/validate.js';
import CustomError from '../errors/CustomError.js';

const validateBonusNumber = (winningNumbers, bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.bonusNumberType);

  if (winningNumbers.includes(bonusNumber)) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate);

  if (bonusNumber < CONSTANT_VALIDATE_NUMBER.min) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.min);

  if (bonusNumber > CONSTANT_VALIDATE_NUMBER.max) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.max);

  return true;
};

export default validateBonusNumber;
