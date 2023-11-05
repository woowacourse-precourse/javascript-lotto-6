import { ERROR_MESSAGE } from '../constant/message.js';

export const validateNumber = (number) => {
  const splitNumber = number.split('');

  splitNumber.forEach((number) => {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT_NUMBER);
    }
  });
};

export const validateDivisible = (number) => {
  if (number % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_NON_DIVISIBLE);
  }
};
