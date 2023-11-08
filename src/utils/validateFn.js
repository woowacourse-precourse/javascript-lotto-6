import { LOTTO_CONSTANT } from '../constant/lottoConstant.js';
import { ERROR_MESSAGE } from '../constant/message.js';

export const validateEmpty = (input) => {
  if (!input) {
    throw ERROR_MESSAGE.INVALID_EMPTY_INPUT;
  }
  return true;
};

export const validateNumber = (number) => {
  const splitNumber = number.toString().split('');

  splitNumber.forEach((number) => {
    if (isNaN(number)) {
      throw ERROR_MESSAGE.INVALID_INPUT_NUMBER;
    }
  });
  return true;
};

export const validateDivisible = (number) => {
  if (number % LOTTO_CONSTANT.MONEY_UNIT !== 0 || number === '0') {
    throw ERROR_MESSAGE.INVALID_NON_DIVISIBLE;
  }
  return true;
};

export const validateLength = (numberArr) => {
  if (numberArr.length !== LOTTO_CONSTANT.LOTTO_LENGTH) {
    throw ERROR_MESSAGE.INVALID_LOTTO_LENGTH;
  }
  return true;
};

export const validateRange = (number) => {
  if (
    number < LOTTO_CONSTANT.MIN_LOTTO_RANGE ||
    number > LOTTO_CONSTANT.MAX_LOTTO_RANGE
  ) {
    throw ERROR_MESSAGE.INVALID_LOTTO_RANGE;
  }
  return true;
};

export const validateUnique = (numberArr) => {
  if (numberArr.length !== new Set(numberArr).size) {
    throw ERROR_MESSAGE.INVALID_LOTTO_UNIQUE;
  }
  return true;
};

export const validateFindEqual = (numberArr, number) => {
  if (
    numberArr.some((element) => {
      return element === number;
    })
  ) {
    throw ERROR_MESSAGE.INVALID_LOTTO_BONUS;
  }
  return true;
};
