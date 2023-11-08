import { ERROR_MESSAGES } from '../constants/errorMessages';

export const checkLength = (winningNumbers) => {
  if (winningNumbers.length !== 6) {
    throw new Error(ERROR_MESSAGES.message.length);
  }
};

export const checkDuplicate = (winningNumbers) => {
  const uniqueNumbers = new Set(winningNumbers);
  if (uniqueNumbers.size !== 6) {
    throw new Error(ERROR_MESSAGES.message.duplicate);
  }
};

export const checkNumberType = (number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error(ERROR_MESSAGES.message.notNumber);
  }
};

export const checkNumberRange = (number) => {
  if (number < 1 || number > 45) {
    throw new Error(ERROR_MESSAGES.message.notRange);
  }
};

export const checkTypeAndRange = (winningNumbers) => {
  for (const number of winningNumbers) {
    checkNumberType(number);
    checkNumberRange(number);
  }
};
