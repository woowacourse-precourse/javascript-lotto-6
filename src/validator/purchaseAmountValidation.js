import { RULES } from "../constants/index.js";

export const purchaseAmountValidation = Object.freeze({
  // [ ] 숫자가 아닌 경우 (common)
  // [ ] 구입금액 <= 0원인 경우
  isPositive: Object.freeze({
    errorMessage: `구입금액을 확인해주세요. (양의 정수)`,
    isInvalid: (purchaseAmount) => {
      const regExp = /^[1-9]\d*$/;
      return !regExp.test(purchaseAmount);
    }
  }),
  // [ ] 1000원으로 나누어 떨어지지 않는 경우
  isDivisibleByOneThousand: Object.freeze({
    errorMessage: `1000원으로 나누어 떨어지지 않습니다.`,
    isInvalid: (purchaseAmount) => {
      return (purchaseAmount % RULES.lottoPrice !== 0);
    }
  }),

});
