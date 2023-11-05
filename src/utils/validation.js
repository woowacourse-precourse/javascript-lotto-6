import {
  BASE_AMOUNT,
  ERROR_MESSAGE,
  NUMBER_COUNT,
  NUMBER_REGEX,
} from "./CONSTANT.js";

const isEmpty = (value) => value === "";

const isAllNumbers = (values) =>
  values.filter((value) => isNumber(value)).length === NUMBER_COUNT;

const isNumber = (value) => NUMBER_REGEX.test(value);

const isInMultiplesOfThousand = (value) => value % BASE_AMOUNT;

const isSixNumbers = (value) => value.length === NUMBER_COUNT;

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
  if (!isSixNumbers(numbers)) {
    throw new Error(ERROR_MESSAGE.notSixNumbers);
  }
  if (!isAllNumbers(numbers)) {
    throw new Error(ERROR_MESSAGE.textIncluded);
  }
};

export { validatePurchase, validateWinningNumber };
