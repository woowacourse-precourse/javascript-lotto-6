import { BASE_AMOUNT, ERROR_MESSAGE, NUMBER_REGEX } from "./CONSTANT.js";

const isEmpty = (value) => value === "";

const isNumber = (value) => NUMBER_REGEX.test(value);

const isInMultiplesOfThousand = (value) => value % BASE_AMOUNT;

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

const validateWinningNumber = (winningNumber) => {
  const numbers = winningNumber.split(",");
  if (isEmpty(winningNumber)) {
    throw new Error(ERROR_MESSAGE.empty);
  }
};

export { validatePurchase, validateWinningNumber };
