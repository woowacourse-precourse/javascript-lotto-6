import { ERROR_MESSAGES, LOTTO_PRICE } from './constants.js';
import { Random } from '@woowacourse/mission-utils';

export const splitAndTrim = (inputString) => {
  if (inputString === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }

  const items = inputString.split(',').map((item) => item.trim());

  return items;
};

export const validateMoney = (input) => {
  if (isNaN(input)) {
    throw new Error(ERROR_MESSAGES.MONEY_NOT_NUMERIC);
  }

  const amount = parseInt(input, 10);

  if (amount < LOTTO_PRICE) {
    throw new Error(ERROR_MESSAGES.AMOUNT_LESS_THAN_1000);
  }

  if (amount % LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGES.NOT_IN_1000_UNIT);
  }

  return true;
};

export const pickUniqueNumbersInRange = (min, max, count) => {
  return Random.pickUniqueNumbersInRange(min, max, count);
};

export const validateWinnigNumber = (input) => {
  if (input.length !== 6) {
    throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
  }

  const numbers = input.map(Number);

  if (numbers.some(isNaN)) {
    throw new Error(ERROR_MESSAGES.NON_NUMERIC);
  }

  if (numbers.some((num) => num < 1 || num > 45)) {
    throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
  }

  if (new Set(numbers).size !== 6) {
    throw new Error(ERROR_MESSAGES.DUPLICATE);
  }

  return true;
};

export const validateBonusNumber = (input, winningNumbers) => {
  const bonusNumber = parseInt(input);

  if (isNaN(input)) {
    throw new Error(ERROR_MESSAGES.NON_NUMERIC);
  }

  if (bonusNumber < 1 || bonusNumber > 45) {
    throw new Error(ERROR_MESSAGES.OUT_OF_RANGE);
  }

  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_BONUS);
  }

  return true;
};
