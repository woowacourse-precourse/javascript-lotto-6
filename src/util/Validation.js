const Validation = {
  currencyAmount(price) {
    if (Number(price) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액은 1,000원 단위로 입력해주세요');
    }
  },

  numberType(price) {
    if (!/^[0-9]+$/.test(price)) {
      throw new Error('[ERROR] 로또 금액은 1,000원 이상의 숫자 형태로 입력해주세요');
    }
  },

  inputLottoPrice(price) {
    Validation.currencyAmount(price);
    Validation.numberType(price);
  },
};

export default Validation;
