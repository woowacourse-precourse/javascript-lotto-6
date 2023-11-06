import { ERROR_MESSAGES, LOTTO_PRICE } from './constants.js';
import { Random } from '@woowacourse/mission-utils';

export const splitAndTrim = (inputString) => {
  if (inputString === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }

  const items = inputString.split(',');

  for (let i = 0; i < items.length; i++) {
    items[i] = items[i].trim();
  }

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
