import { COMMON } from '../constants/common.js';
import { LOTTO } from '../constants/lotto.js';

export const validation = {
  isEmpty: (str) => {
    return str === '';
  },
  isNumberZero: (number) => {
    return number === COMMON.zero;
  },
  isNotLottoPurchagePriceRange: (price) => {
    return price % LOTTO.unitPrice !== 0;
  },
  isNotSeparateCommaNumbers: (str) => {
    const separateCommaNumbersRegexp = /^([0-9]+(,[0-9]+)+)$/g;
    return !separateCommaNumbersRegexp.test(str);
  },
  isExistDuplicateNumbers: (arr) => {
    const deDuplicateNumbers = new Set(arr);
    return arr.length !== deDuplicateNumbers.size;
  },
  isLottoNumberRange: (number) => {
    return LOTTO.minNumber <= number && number <= LOTTO.maxNumber;
  },
};

export const abc = {};
