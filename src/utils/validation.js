import { BASEAMOUNT, ERROR_MESSAGE, NUMBERREGEX } from "./CONSTANT.js";

const isEmpty = (value) => value === "";

const isNumber = (value) => NUMBERREGEX.test(value);

const isInMultiplesOfThousand = (value) => value % BASEAMOUNT;

const validatePurchase = (purchaseAmount) => {
  if (isEmpty(purchaseAmount)) {
    throw new Error(ERROR_MESSAGE.empty);
  }
  if (!isNumber(purchaseAmount)) {
    throw new Error(ERROR_MESSAGE.textIncluded);
  }
  if (isInMultiplesOfThousand(purchaseAmount)) {
    throw new Error(ERROR_MESSAGE.notInthousand);
  }
};

export { validatePurchase };
