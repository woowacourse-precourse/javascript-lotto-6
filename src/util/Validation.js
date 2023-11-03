const Validation = {
  CurrencyAmount(price) {
    if (Number(price) % 1000 !== 0) {
      throw new Error('[ERROR] 로또 금액은 1,000원 단위로 입력해주세요');
    }
  },
};

export default Validation;
