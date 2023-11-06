import { ERRORS } from "./message.js";

function isInputEmpty(input) {
  if (!input) {
    throw new Error(ERRORS.EMPTY_INPUT);
  }
}

function isInputNumeric(input) {
  if (isNaN(input)) {
    throw new Error(ERRORS.NOT_NUMBER);
  }
}

function isDivisibleByThousand(input) {
  if (input % 1000 !== 0) {
    throw new Error(ERRORS.INVALID_PURCHASE_AMOUNT);
  }
}

function isArrLengthSix(arr) {
  if (arr.length !== 6) {
    throw new Error(ERRORS.INVALID_NUMBERS_LENGTH);
  }
}

function hasDuplicate(arr) {
  const arrSet = new Set(arr);
  if (arr.length !== arrSet.size) {
    throw new Error(ERRORS.CONTAIN_DUPLICATE);
  }
}

function isInteger(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error(ERRORS.NOT_INTEGER);
  }
}

function isNumberInRange(input) {
  const number = parseFloat(input);
  if (number < 1 || number > 45) {
    throw new Error(ERRORS.NUMBER_RANGE_ALERT);
  }
}

function isElementInArray({ element, array }) {
  if (array.includes(element)) {
    throw new Error(ERRORS.BONUS_NUMBER_DUPLICATE);
  }
}

export {
  isInputEmpty,
  isInputNumeric,
  isDivisibleByThousand,
  isArrLengthSix,
  hasDuplicate,
  isInteger,
  isNumberInRange,
  isElementInArray,
};
