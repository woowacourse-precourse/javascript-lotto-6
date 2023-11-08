import { ERROR_MESSAGES } from '../constants/messages.js';
import LOTTO_CONSTANT_NUMBER from '../constants/lotto.js';
import CustomError from '../errors/CustomError.js';

const validateBonusNumber = (winningNumbers, bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.bonusNumberType);

  if (winningNumbers.includes(bonusNumber)) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate);

  if (bonusNumber < LOTTO_CONSTANT_NUMBER.min) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.min);

  if (bonusNumber > LOTTO_CONSTANT_NUMBER.max) throw new CustomError(ERROR_MESSAGES.winningNumbersAndBonusNumber.max);

  return true;
};

export default validateBonusNumber;
