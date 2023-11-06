/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import {
  BASE_AMOUNT,
  ERROR_MESSAGE,
  NUMBER_COUNT,
  NUMBER_REGEX,
} from "./CONSTANT.js";

const isEmpty = (value) => value === "";

const isNumber = (value) => NUMBER_REGEX.test(value);

const isInMultiplesOfThousand = (value) => value % BASE_AMOUNT;

const isNumberInRange = (value) => value > 0 && value < 46;

const isSixNumbers = (values) => values.length === NUMBER_COUNT;

const isSetSizeSix = (values) => [...new Set(values)].length === NUMBER_COUNT;

const isAllNumbers = (values) =>
  values.filter((value) => isNumber(value)).length === NUMBER_COUNT;

const isNumbersInRange = (values) =>
  values.filter((value) => isNumberInRange(Number(value))).length ===
  NUMBER_COUNT;

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

  if (isEmpty(winningNumber)) throw new Error(ERROR_MESSAGE.empty);
  if (!isSixNumbers(numbers)) throw new Error(ERROR_MESSAGE.notSixNumbers);
  if (!isAllNumbers(numbers)) throw new Error(ERROR_MESSAGE.textIncluded);
  if (!isNumbersInRange(numbers)) throw new Error(ERROR_MESSAGE.notInRange);
  if (!isSetSizeSix(numbers)) throw new Error(ERROR_MESSAGE.duplicated);
};

const validateBonusNumber = (winningNumbers, bonusNumber) => {
  if (isEmpty(bonusNumber)) throw new Error(ERROR_MESSAGE.empty);
  if (!isNumber(bonusNumber)) throw new Error(ERROR_MESSAGE.textIncluded);
  if (!isNumberInRange(Number(bonusNumber))) {
    throw new Error(ERROR_MESSAGE.notInRange);
  }
  if (isSetSizeSix([...winningNumbers.concat(Number(bonusNumber))])) {
    throw new Error(ERROR_MESSAGE.duplicated);
  }
};

export { validatePurchase, validateWinningNumber, validateBonusNumber };
