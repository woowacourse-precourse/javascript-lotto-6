import { COMMON } from '../constants/common.js';
import { LOTTO } from '../constants/lotto.js';

export const validation = {
  isEmpty: (str) => {
    return str === COMMON.blank;
  },
  isNumberZero: (number) => {
    return number === COMMON.zero;
  },
  isNotSeparateCommaNumbers: (str) => {
    const separateCommaNumbersRegexp = /^([0-9]+(,[0-9]+)+)$/g;
    return !separateCommaNumbersRegexp.test(str);
  },
  isExistDuplicateNumbers: (arr) => {
    const deDuplicateNumbers = new Set(arr);
    return arr.length !== deDuplicateNumbers.size;
  },
};

export const lottoValidation = {
  isNotLottoPurchagePriceRange: (price) => {
    return price % LOTTO.unitPrice !== COMMON.zero;
  },
  isLottoNumberRange: (number) => {
    return LOTTO.minNumber <= number && number <= LOTTO.maxNumber;
  },
};
