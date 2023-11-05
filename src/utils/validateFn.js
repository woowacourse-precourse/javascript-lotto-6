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

export const validateLength = (numberArr) => {
  if (numberArr.length !== 6) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
  }
};

export const validateRange = (number) => {
  if (number < 1 || number > 45) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
  }
};

export const validateUnique = (numberArr) => {
  if (numberArr.length !== new Set(numberArr).size) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_UNIQUE);
  }
};
