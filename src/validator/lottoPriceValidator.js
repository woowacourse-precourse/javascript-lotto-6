import { LOTTO_PRICE } from '../constants/constant.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import commonValidator from './commonValidator.js';

const lottoPriceValidator = {
  currencyAmount(price) {
    if (Number(price) % LOTTO_PRICE.CURRENCY_AMOUNT !== 0) {
      throw new Error(ERROR_MESSAGE.CURRENCY_AMOUNT);
    }
  },

  maximumLimitPrice(price) {
    if (Number(price) > LOTTO_PRICE.MAXIMUM) {
      throw new Error(ERROR_MESSAGE.MAXIMUM_LIMIT);
    }
  },

  minimumLimitPrice(price) {
    if (Number(price) < LOTTO_PRICE.CURRENCY_AMOUNT) {
      throw new Error(ERROR_MESSAGE.MINIMUM_LIMIT);
    }
  },

  checkLottoPrice(price) {
    lottoPriceValidator.currencyAmount(price);
    lottoPriceValidator.maximumLimitPrice(price);
    lottoPriceValidator.minimumLimitPrice(price);
    commonValidator.checkNumberType(price);
  },
};

export default lottoPriceValidator;
