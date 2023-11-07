import { ERROR_TYPE } from "../constants/messages";
import { ONE_LOTTO_PRICE, LOTTO_RANGE } from "../constants/numeric.js";

export const validateIsNumber = (number) => {
  if (isNaN(number)) {
    throw new Error(ERROR_TYPE.NOT_NUMBERS);
  }
};

export const validateNoWhitespace = (number) => {
  if (number.trim() !== number) {
    throw new Error(ERROR_TYPE.CONTAINS_WHITESPACE);
  }
};

export const validateNoWhitespaceInArray = (numbers) => {
  if (numbers.includes(" ")) {
    throw new Error(ERROR_TYPE.CONTAINS_WHITESPACE);
  }
};

export const validateRange = (number) => {
  const numberValue = parseInt(number, 10);
  if (numberValue < LOTTO_RANGE.FROM || numberValue > LOTTO_RANGE.TO) {
    throw new Error(ERROR_TYPE.OUT_OF_RANGE);
  }
};

export const validateLength = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error(ERROR_TYPE.NOT_SIX_NUMBERS);
  }
};

export const validateNoDuplicates = (numbers) => {
  const numberSet = new Set(numbers);
  if (numberSet.size !== numbers.length) {
    throw new Error(ERROR_TYPE.CONTAINS_DUPLICATES);
  }
};

export const validateAllNumbers = (numbers) => {
  if (numbers.some(isNaN)) {
    throw new Error(ERROR_TYPE.NOT_NUMBERS);
  }
};

export const validateRangeInArray = (numbers) => {
  if (numbers.some((num) => num < LOTTO_RANGE.FROM || num > LOTTO_RANGE.TO)) {
    throw new Error(ERROR_TYPE.OUT_OF_RANGE);
  }
};

export const validateMinimumPrice = (number) => {
  if (number < ONE_LOTTO_PRICE) {
    throw new Error(ERROR_TYPE.MINIMUM_PRICE);
  }
};

export const validateCanDivide = (number) => {
  if (number % ONE_LOTTO_PRICE !== 0) {
    throw new Error(ERROR_TYPE.CANNOT_DIVIDE_BY_1000);
  }
};

export const validateNoDuplicatesInBonus = (bonusNumber, winningNumbers) => {
  if (winningNumbers.includes(bonusNumber)) {
    throw new Error(ERROR_TYPE.CONTAINS_DUPLICATES_IN_BONUS);
  }
}