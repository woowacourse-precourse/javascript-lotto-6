import { LOTTO } from "../constants/lotto.js";

export const Validator = {
  isValidPurchaseAmount(number) {
    return this.isInThousandUnit(number) && this.isNumber(number);
  },
  isInThousandUnit(number) {
    return Number(number) % LOTTO.PRICE === 0;
  },
  isNumber(number) {
    return !isNaN(number);
  },
  isNumberInRange(number) {
    return number >= LOTTO.MIN && number <= LOTTO.MAX;
  },
};
