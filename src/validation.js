import { ERROR_MESSAGE, LOTTO_NUMBERS } from './constants.js';

const Validation = {
  isNumber(inputLottoNumber) {
    inputLottoNumber.forEach((number) => {
      if (isNaN(number)) throw new Error(ERROR_MESSAGE.ISNAN);
    });
    return true;
  },

  numberCountLength(inputLottoNumber) {
    if (inputLottoNumber.length !== LOTTO_NUMBERS.NUMBER_SIZE) {
      throw new Error(ERROR_MESSAGE.COUNT);
    }
    return true;
  },

  dupliCatedNum(inputLottoNumber) {
    if (new Set(inputLottoNumber).size !== LOTTO_NUMBERS.NUMBER_SIZE) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
    return true;
  },

  numberRange(inputLottoNumber) {
    if (
      !inputLottoNumber.every((n) => Number.isInteger(n) && n >= 1 && n <= 45)
    ) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
    return true;
  },

  isUniqueBonusNumber(bonusNumber, inputLottoNumber) {
    const combine = [bonusNumber, ...inputLottoNumber];
    const duplicateCheck = new Set(combine);

    return combine.length === duplicateCheck.size;
  },

  validateUserInputNumbers(inputLottoNumber) {
    Validation.isNumber(inputLottoNumber);
    Validation.numberCountLength(inputLottoNumber);
    Validation.dupliCatedNum(inputLottoNumber);
    Validation.numberRange(inputLottoNumber);
  },

  validateBonusNumbers(bonusNumber, inputLottoNumber) {
    if (isNaN(bonusNumber)) throw new Error(ERROR_MESSAGE.ISNAN);
    if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.RANGE);
    }
    if (!this.isUniqueBonusNumber(bonusNumber, inputLottoNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED);
    }
  },
};

export default Validation;
