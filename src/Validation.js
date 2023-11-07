import { PURCHASE_AMOUNT_ERROR_MESSAGES } from './Constants.js';

export const validatePurchaseAmountInput = async (purchaseAmountInput) => {
  if (!isNumber(purchaseAmountInput)) {
    throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_NUMBER);
  }
  if (isStartWithZero(purchaseAmountInput)) {
    throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.START_WITH_ZERO);
  }
};

const isNumber = (input) => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
};

const isStartWithZero = (input) => {
  return input[0] === '0';
};
