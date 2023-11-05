import { ERROR_MESSAGES } from '../constants/messages.js';
import CONSTANT_VALIDATE_NUMBER from '../constants/validate.js';
import { Console } from '@woowacourse/mission-utils';

const validateBonusNumber = (winningNumbers, bonusNumber) => {
  if (!Number.isInteger(bonusNumber)) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.bonusNumberType);
    return false;
  }

  if (winningNumbers.includes(bonusNumber)) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.duplicate);
    return false;
  }

  if (bonusNumber < CONSTANT_VALIDATE_NUMBER.min) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.min);
    return false;
  }

  if (bonusNumber > CONSTANT_VALIDATE_NUMBER.max) {
    Console.print(ERROR_MESSAGES.winningNumbersAndBonusNumber.max);
    return false;
  }

  return true;
};

export default validateBonusNumber;
