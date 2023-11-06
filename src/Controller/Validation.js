import { NUMBERS, ERROR_MESSAGE } from '../Constants/Constants.js';

const VALIDATION = {
  isThousands(price) {
    if (price % NUMBERS.LOTTO_PRICE === 0 || price === 0) {
      return true;
    }
    return false;
  },

  isNum(any) {
    if (!Number.isNaN(any) && any > 0) {
      // isNan : 숫자가 아니면 true
      return true;
    }
    return false;
  },

  inputNothing(any) {
    if (
      typeof any === 'undefined' ||
      any === null ||
      any === '' ||
      any === 'null' ||
      any.length === 0 ||
      (typeof any === 'object' && !Object.keys(any).length)
    ) {
      return false;
    }
    return true;
  },

  isLottoNum(number) {
    if (number <= NUMBERS.MAX_LOTTO || number >= NUMBERS.MIN_LOTTO) return true;
    return false;
  },

  async priceValidation(price) {
    if (!this.inputNothing(price)) throw new Error(ERROR_MESSAGE.INPUT_NOTHING);
    if (!this.isNum(price)) throw new Error(ERROR_MESSAGE.NOT_NUMBERS);
    if (!this.isThousands(price)) throw new Error(ERROR_MESSAGE.NOT_THOUSANDS);
  },
};

export default VALIDATION;
