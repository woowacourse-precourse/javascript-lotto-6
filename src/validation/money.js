import { ERROR_MESSAGE } from "../constants/error.js";

export const validateMoney = (string) => {
  const money = +string;
  if (isNaN(money)) {
    throw new Error(ERROR_MESSAGE.MONEY_ISNAN);
  }

  if (money < 1000) {
    throw new Error(ERROR_MESSAGE.MONEY_UPPER_1000);
  }

  if (money % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.MONEY_UNIT_1000);
  }
};
