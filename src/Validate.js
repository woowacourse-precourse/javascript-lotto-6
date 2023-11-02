const ERROR = {
  MONEY_UNIT: '구입 금액은 1,000원 단위여야 합니다.',
  TYPE_NUMBER: '숫자 형식으로 입력하세요.',
};

export const Validate = Object.freeze({
  purchasingMoney(money) {
    this.isNumberType(money);

    if (!Number.isInteger(money / 1000)) {
      throw new Error(ERROR.MONEY_UNIT);
    }
  },

  isNumberType(string) {
    if (isNaN(string)) {
      throw new Error(ERROR.TYPE_NUMBER);
    }
  },
});
