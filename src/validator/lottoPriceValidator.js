import commonValidator from './commonValidator.js';

const lottoPriceValidator = {
  currencyAmount(price) {
    if (Number(price) % 1000 !== 0) {
      throw new Error('금액은 1,000원 단위로 입력해주세요');
    }
  },

  limitPrice(price) {
    if (Number(price) > 2000000000) {
      throw new Error('금액이 너무 큽니다.');
    }
  },

  minimumPrice(price) {
    if (Number(price) < 1000) {
      throw new Error('1,000원 이상부터 구매가 가능합니다.');
    }
  },

  inputLottoPrice(price) {
    lottoPriceValidator.currencyAmount(price);
    lottoPriceValidator.limitPrice(price);
    lottoPriceValidator.minimumPrice(price);
    commonValidator.checkNumberType(price);
  },
};

export default lottoPriceValidator;
