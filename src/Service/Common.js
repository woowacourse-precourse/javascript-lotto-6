import {
  LOTTO_PRICE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from '../Constants.js';

export const isNumber = (input) => {
  const regex = /^[0-9]+$/;
  return regex.test(input);
};

export const isStartWithZero = (input) => {
  return input[0] === '0';
};

export const isSmallerThanLottoPrice = (input) => {
  return LOTTO_PRICE > Number(input);
};

export const isDivisibleByThousand = (input) => {
  return Number(input) % 1000 === 0;
};

export const isValidWinningNumbersLength = (input) => {
  return input.split(',').length === 6;
};

export const isNumbers = (input) => {
  return input.split(',').every((el) => isNumber(el));
};

export const isOutOfRange = (input) => {
  return Number(input) < LOTTO_MIN_NUMBER || Number(input) > LOTTO_MAX_NUMBER;
};
export const isOutOfRangeInNumbers = (input) => {
  return input.split(',').some((el) => {
    return isOutOfRange(el);
  });
};

export const isDuplicated = (input) => {
  const numbers = new Set(input.split(',').map((el) => Number(el)));
  return numbers.size !== LOTTO_NUMBERS_LENGTH;
};

export const isDuplicatedWithWinningNumber = (input, winningNumbers) => {
  return winningNumbers.includes(Number(input));
};
