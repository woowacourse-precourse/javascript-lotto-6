import { LOTTO_PRICE, PURCHASE_AMOUNT_ERROR_MESSAGES } from './Constants.js';

export const validatePurchaseAmountInput = async (purchaseAmountInput) => {
  if (!isNumber(purchaseAmountInput)) {
    throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_NUMBER);
  }
  if (isStartWithZero(purchaseAmountInput)) {
    throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.START_WITH_ZERO);
  }
  if (isSmallerThanLottoPrice(purchaseAmountInput)) {
    throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.LESS_THAN_LOTTO_PRICE);
  }
  if (!isDivisibleByThousand(purchaseAmountInput)) {
    throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_DIVISIBLE_BY_THOUSAND);
  }
};

const isNumber = (input) => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
};

const isStartWithZero = (input) => {
  return input[0] === '0';
};

const isSmallerThanLottoPrice = (input) => {
  return LOTTO_PRICE > Number(input);
};

const isDivisibleByThousand = (input) => {
  return Number(input) % 1000 === 0;
};
