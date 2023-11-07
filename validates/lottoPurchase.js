import { ERROR_MESSAGES } from '../constants/errorMessages.js';

export const validateFormat = (amount) => {
  const numberPattern = /^[0-9]+$/;
  if (!numberPattern.test(amount)) {
    throw new Error(ERROR_MESSAGES.message.invalidAmountFormat);
  }
};

export const validateMinimumAmount = (amount) => {
  if (amount < 1000) {
    throw new Error(ERROR_MESSAGES.message.lessMinimumAmount);
  }
};
