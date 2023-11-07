import { ERROR_MESSAGE } from "./Text.js";

// 2. 구매금액 입력값 유효성 검사
export const validateMoney = (money) => {
  if (money % 1000 !== 0 || isNaN(money)) {
    throw new Error(ERROR_MESSAGE.MONEY);
  }
  return true;
};
