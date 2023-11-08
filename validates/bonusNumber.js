import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export const checkBonusNumberType = (bonusNumber) => {
  if (typeof bonusNumber !== 'number' || isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.message.bonusNotNumber);
  }
};

export const checkBonusNumberRange = (bonusNumber) => {
  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGES.message.bonusNotRange);
  }
};

export const checkBonusNumberDuplicate = (bonusNumber, winningNumbers) => {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.message.bonusDuplicate);
  }
};
