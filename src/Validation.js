import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_PRICE,
  PURCHASE_AMOUNT_ERROR_MESSAGES,
  WINNING_NUMBERS_ERROR_MESSAGES,
} from './Constants.js';

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

export const validateWinnerNumbersInput = async (winningNumbersInput) => {
  if (!isValidWinningNumbersLength(winningNumbersInput)) {
    throw new Error(
      WINNING_NUMBERS_ERROR_MESSAGES.INVALID_WINNING_NUMBERS_LENGTH
    );
  }
  if (!isNumbers(winningNumbersInput)) {
    throw new Error(WINNING_NUMBERS_ERROR_MESSAGES.NOT_NUMBER);
  }
  if (!isOutOfRange(winningNumbersInput)) {
    throw new Error(WINNING_NUMBERS_ERROR_MESSAGES.OUT_OF_RANGE);
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

const isValidWinningNumbersLength = (input) => {
  return input.split(',').length === 6;
};

const isNumbers = (input) => {
  return input.split(',').every((el) => isNumber(el));
};

const isOutOfRange = (input) => {
  return input
    .split(',')
    .every(
      (el) => Number(el) >= LOTTO_MIN_NUMBER && Number <= LOTTO_MAX_NUMBER
    );
};
