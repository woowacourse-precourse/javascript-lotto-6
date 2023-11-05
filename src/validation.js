import { ERROR_MESSAGE } from './constants.js';

const Validation = {
  isNumber(inputLottoNumber) {
    inputLottoNumber.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR_MESSAGE.ISNAN);
    });
    return true;
  },

  numberCountLength(inputLottoNumber) {
    if (inputLottoNumber.length !== 6) {
      throw new Error(ERROR_MESSAGE.COUNT);
    }
    return true;
  },

  dupliCatedNum(inputLottoNumber) {
    if (new Set(inputLottoNumber).size !== 6) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
    return true;
  },

  numberRange() {
    if (!numbers.every((n) => Number.isInteger(n) && n >= 1 && n <= 45)) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
    return true;
  },
};

export default Validation;
