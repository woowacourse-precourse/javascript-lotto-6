import { lotto } from '../constants/constants';
import { errorMessage } from '../constants/messages';

const Validation = {
  isNotValid(input) {
    return Number.isNaN(input) || input % 1000 !== 0 || input <= 0;
  },

  checkLottoPurchase(cash) {
    if (this.isNotValid(cash)) throw new Error(errorMessage.INVALID_INTEGER);

    return true;
  },

  checkLength(lottoArray) {
    return lottoArray.length !== lotto.LENGTH;
  },

  isNotValidNumber(number) {
    const isNotValid =
      number < lotto.MIN_RANGE || number > lotto.MAX_RANGE || isNaN(number);
    return isNotValid;
  },

  checkLottoNumber(lottoArray) {
    for (const number of lottoArray) {
      if (this.isNotValidNumber(number)) {
        return true;
      }
    }
    return false;
  },

  checkDuplicates(lottoArray) {
    return new Set(lottoArray).size !== lotto.LENGTH;
  },

  checkBonusNumber(number) {
    if (this.isNotValidNumber(number)) {
      return true;
    }
    return false;
  },

  checkBonusDuplicates(lottoNumbers, number) {
    return lottoNumbers.includes(number);
  },
};

export default Validation;
