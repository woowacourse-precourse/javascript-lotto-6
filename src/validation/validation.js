import { ERROR_MSG } from "../constants/ErrorMessage.js";

//로또 1장의 가격은 1,000원이다
export const validatePurchaseFormat = (price) => {
  if (price % 1000 !== 0) {
    throw new Error(ERROR_MSG.price);
  }
};
