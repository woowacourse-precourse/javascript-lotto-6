import { ERROR_MESSAGE } from '../constants/messages.js';

const LottoValidator = {
  validLottoNumber(numbers) {
    if (!this.isValidLength(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidLength);
    }
    if (!this.isNumberic(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidNumberic);
    }
    if (!this.isValidRangeNumber(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidRange);
    }
    if (!this.isValidUniqueName(numbers)) {
      throw new Error(ERROR_MESSAGE.invalidUnique);
    }
  },

  validBonusNumber(number, isContainning) {
    const numberRegExp = /^\d+$/;
    const numberic = numberRegExp.test(number) && !Number.isNaN(number);
    const range = number >= 1 && number <= 45;

    if (!numberic) {
      throw new Error(ERROR_MESSAGE.invalidBonusNumber);
    }

    if (!range) {
      throw new Error(ERROR_MESSAGE.invalidRange);
    }

    if (isContainning) {
      throw new Error(ERROR_MESSAGE.invalidUniqueBonusNumber);
    }
  },

  isValidLength(numbers) {
    return numbers.length === 6;
  },

  isValidRangeNumber(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  },

  isValidUniqueName(numbers) {
    return new Set(numbers).size === 6;
  },

  isNumberic(numbers) {
    const numberRegExp = /^\d+$/;

    return numbers.every((number) => numberRegExp.test(number));
  },
};

export default LottoValidator;
