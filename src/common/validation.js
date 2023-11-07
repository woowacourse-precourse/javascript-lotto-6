import { INPUT_ERROR_MESSAGE } from "./constants.js";

export const validatePurchaseInput = async (inputPurchaseAmount) => {
  if (!isNumberInput(inputPurchaseAmount)) {
    throw new Error(INPUT_ERROR_MESSAGE.NON_NUMERIC);
  }
  if (!isNumberZero(inputPurchaseAmount)) {
    throw new Error(INPUT_ERROR_MESSAGE.NON_ZERO_START_AMOUNT);
  }
  if (!isNumberMinus(inputPurchaseAmount)) {
    throw new Error(INPUT_ERROR_MESSAGE.NON_MINUS_AMOUNT);
  }
  if (!isNumberUnit(inputPurchaseAmount)) {
    throw new Error(INPUT_ERROR_MESSAGE.COST_UNIT);
  }
};

export const isNumberInput = (inputPurchaseAmount) => {
  const REGEX = /^[0-9]+$/;
  return REGEX.test(inputPurchaseAmount);
};

export const isNumberZero = (inputPurchaseAmount) => {
  const REGEX = /^[^0]\d*/;
  return REGEX.test(inputPurchaseAmount);
};

export const isNumberMinus = (inputPurchaseAmount) => {
  const REGEX = /^(-?)\d+$/;
  return REGEX.test(inputPurchaseAmount);
};

export const isNumberUnit = (inputPurchaseAmount) => {
  return Math.floor(inputPurchaseAmount % 1000) === 0;
};
