import { LOTTO } from '../config.js';

export const isPositiveInteger = (value) => {
  const regex = /^[0-9]*$/;

  return regex.test(value);
};

export const isEmpty = (value) => {
  if (value === null || value === undefined || value.length === 0) return true;

  return false;
};

export const isDuplicated = (values) => {
  const set = new Set(values);

  return set.size !== values.length;
};

export const isLessThanLottoPrice = (price) => price < LOTTO.PRICE;

export const isNotMultipleOfLottoPrice = (price) => price % LOTTO.PRICE !== 0;

export const isRangeInvalid = (number) => {
  const { START, END } = LOTTO.RANGE;

  return number < START || number > END;
};

export const isLengthInvalid = (numbers) => numbers.length !== LOTTO.COUNT;
