import { LOTTO, REGEX_POSITIVE_INTEGER } from '../constant/index.js';

const {
  PRICE,
  RANGE: { START, END },
  COUNT,
} = LOTTO;

export const isPositiveInteger = (value) => {
  const regex = REGEX_POSITIVE_INTEGER;

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

export const isLessThanLottoPrice = (price) => price < PRICE;

export const isNotMultipleOfLottoPrice = (price) => price % PRICE !== 0;

export const isRangeInvalid = (number) => number < START || number > END;

export const isLengthInvalid = (numbers) => numbers.length !== COUNT;
