import commonValidator from './commonValidator.js';

const LOTTO_PRICE_PRIFIX_MESSAGE = '로또 금액은';

const lottoPriceValidator = {
  currencyAmount(price) {
    if (Number(price) % 1000 !== 0) {
      throw new Error('로또 금액은 1,000원 단위로 입력해주세요');
    }
  },

  maximumLimitPrice(price) {
    if (Number(price) > 2000000000) {
      throw new Error('로또 금액이 너무 큽니다.');
    }
  },

  minimumLimitPrice(price) {
    if (Number(price) < 1000) {
      throw new Error('로또 금액은 1,000원 이상부터 구매가 가능합니다.');
    }
  },

  checkLottoPrice(price) {
    lottoPriceValidator.currencyAmount(price);
    lottoPriceValidator.maximumLimitPrice(price);
    lottoPriceValidator.minimumLimitPrice(price);
    commonValidator.checkNumberType(LOTTO_PRICE_PRIFIX_MESSAGE, price);
  },
};

export default lottoPriceValidator;
