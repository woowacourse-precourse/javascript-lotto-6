import {
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  ONE_THOUSAND,
} from "./constants.js";
import { ERRORS } from "./message.js";

export function isInputEmpty(input) {
  if (!input) {
    throw new Error(ERRORS.EMPTY_INPUT);
  }
}

export function isZero(input) {
  if (input === "0") {
    throw new Error(ERRORS.SHOULD_BUY);
  }
}

export function isInputNumeric(input) {
  if (isNaN(input)) {
    throw new Error(ERRORS.NOT_NUMBER);
  }
}

export function isPositiveNumber(input) {
  if (Number(input) < 0) {
    throw new Error(ERRORS.NEGATIVE_NUMBER);
  }
}

export function isDivisibleByThousand(input) {
  if (input % ONE_THOUSAND !== 0) {
    throw new Error(ERRORS.INVALID_PURCHASE_AMOUNT);
  }
}

export function isArrayLengthSix(array) {
  if (array.length !== LOTTO_LENGTH) {
    throw new Error(ERRORS.INVALID_NUMBERS_LENGTH);
  }
}

export function hasDuplicate(array) {
  const arraySet = new Set(array);
  if (array.length !== arraySet.size) {
    throw new Error(ERRORS.CONTAIN_DUPLICATE);
  }
}

export function isInteger(input) {
  if (!Number.isInteger(Number(input))) {
    throw new Error(ERRORS.NOT_INTEGER);
  }
}

export function isNumberInRange(input) {
  const number = parseFloat(input);
  if (number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER) {
    throw new Error(ERRORS.NUMBER_RANGE_ALERT);
  }
}

export function isElementInArray({ element, array }) {
  if (array.includes(element)) {
    throw new Error(ERRORS.BONUS_NUMBER_DUPLICATE);
  }
}
