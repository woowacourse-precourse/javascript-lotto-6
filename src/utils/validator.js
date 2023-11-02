import { amount } from "../constants/amount.js";

export const Validator = {
  isValidPurchaseAmount(number) {
    return this.isInThousandUnit(number) && this.isNumber(number);
  },

  isInThousandUnit(number) {
    return Number(number) % amount.unit === 0;
  },

  isNumber(number) {
    return !isNaN(number);
  },
};
