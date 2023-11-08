import {
  INPUT_ERROR_MESSAGE,
  LOTTO,
  LOTTO_ERROR_MESSAGE,
} from "./constants.js";

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

export const validateWinningInput = async (inputWinningNumber) => {
  if (!isvalidateWinningNumber(inputWinningNumber)) {
    throw new Error(INPUT_ERROR_MESSAGE.NON_NUMERIC);
  }
};

export const isvalidateWinningNumber = (inputWinningNumber) => {
  const REGEX = /^[1-9][0-9]*(?:,[1-9][0-9]*)*$/;
  return REGEX.test(inputWinningNumber);
};

export const validateWinningNumber = (winningNumber) => {
  if (!winningNumberLength(winningNumber, LOTTO.LENGTH)) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_LENGTH);
  }
  if (!winningNumberRange(winningNumber)) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_RANGE);
  }
  if (!winningNumberDuplication(winningNumber)) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_DUPLICATION);
  }
};

export const winningNumberLength = (winningNumber, length) => {
  return winningNumber.length === length;
};

export const winningNumberRange = (winningNumber) => {
  return winningNumber.every((number) => 1 <= number && number <= 45);
};
export const winningNumberDuplication = (winningNumber) => {
  const duplicationNumber = [...new Set(winningNumber)];
  return duplicationNumber.length === winningNumber.length;
};

export const validateBonusNumberInput = async (bonusNumber, winningNumber) => {
  if (!isBonusNumberInput(bonusNumber)) {
    throw new Error(INPUT_ERROR_MESSAGE.NON_NUMERIC);
  }
  if (!bonusNumberRange(bonusNumber)) {
    throw new Error(LOTTO_ERROR_MESSAGE.LOTTO_RANGE);
  }
  if (duplicateNumber(bonusNumber, winningNumber)) {
    throw new Error(INPUT_ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION);
  }
};

export const isBonusNumberInput = (bonusNumber) => {
  const REGEX = /^(?!0[0-9])[1-9][0-9]*$/;
  return REGEX.test(bonusNumber);
};

export const bonusNumberRange = (bonusNumber) => {
  return 1 <= bonusNumber && bonusNumber <= 45;
};

export const duplicateNumber = (inputBonusNumber, winningNumber) => {
  return winningNumber.includes(inputBonusNumber);
};
