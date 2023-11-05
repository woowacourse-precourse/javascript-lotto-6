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

function isNumbersLengthSix(numbers) {
  if (numbers.length !== 6) {
    throw new Error(ERRORS.INVALID_NUMBERS_LENGTH);
  }
}

function hasDuplicate(numbers) {
  const numberSet = new Set(numbers);
  if (numbers.length !== numberSet.size) {
    throw new Error(ERRORS.CONTAIN_DUPLICATE_NUMBER);
  }
}

function isNumberInRange(number) {
  if (number < 1 || number > 45) {
    throw new Error(ERRORS.NUMBER_RANGE_ALERT);
  }
}

export {
  isInputEmpty,
  isInputNumeric,
  isDivisibleByThousand,
  isNumbersLengthSix,
  hasDuplicate,
  isNumberInRange,
};
