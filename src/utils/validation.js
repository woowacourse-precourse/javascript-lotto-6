import { COMMON } from '../constants/common.js';
import { LOTTO } from '../constants/lotto.js';

export const validation = {
  isExistDuplicateNumbers: arr => {},
  isLottoNumberRange: number => {
    return LOTTO.min <= number && number <= LOTTO.max;
  },
  isNotLottoPurchagePriceRange: price => {
    return price % LOTTO.unitPrice !== 0;
  },
  isWinningLottoNumbers: str => {},
  isDuplicateNumbers: (number, arr) => {},
  isEmpty: str => {
    return str === '';
  },
  isNumberZero: number => {
    return number === COMMON.zero;
  },
};
