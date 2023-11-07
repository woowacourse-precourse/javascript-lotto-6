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

  isLottoNum(numbers) {
    if (
      numbers.some(
        (number) => number > NUMBERS.MAX_LOTTO || number < NUMBERS.MIN_LOTTO,
      )
    )
      return false;
    return true;
  },

  // 로또 입력 개수가 6개인지 검증
  isSix(numbers) {
    if (numbers.length !== 6) return false;
    return true;
  },

  isDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) return false;
    return true;
  },

  async priceValidation(price) {
    if (!this.inputNothing(price)) throw new Error(ERROR_MESSAGE.INPUT_NOTHING);
    if (!this.isNum(price)) throw new Error(ERROR_MESSAGE.NOT_NUMBERS);
    if (!this.isThousands(price)) throw new Error(ERROR_MESSAGE.NOT_THOUSANDS);
  },

  lottoNumValidation(numbers) {
    if (!this.isSix(numbers)) throw new Error(ERROR_MESSAGE.NOT_SIX);
    if (!this.isDuplicate(numbers))
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    if (!this.isLottoNum(numbers)) throw new Error(ERROR_MESSAGE.NOT_LOTTO_NUM);
  },
};

export default VALIDATION;
