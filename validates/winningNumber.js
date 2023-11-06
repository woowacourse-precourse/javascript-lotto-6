import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export const checkWinningNumbers = (winningNumbers) => {
  if (winningNumbers.length !== 6) {
    throw new Error(ERROR_MESSAGES.message.invalidWinningNumbers);
  }
};

export const checkBonusNumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.message.invalidBonusNumber);
  }
};
