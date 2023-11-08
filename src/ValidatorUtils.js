import ErrorMessages from "./ErrorMessages.js";

export function isNotEmpty(input) {
  if (!input.trim().length) {
    throw new Error(ErrorMessages.EMPTY_INPUT);
  }
}

export function isNumber(value) {
  if (isNaN(value)) {
    throw new Error(ErrorMessages.INVALID_NUMBER);
  }
}

export function outNumberRange(number) {
  if (number < 1 || number > 45) {
    throw new Error(ErrorMessages.NUMBER_OUT_OF_RANGE);
  }
}

export function isNotDuplicate(numbers) {
  if (new Set(numbers).size !== numbers.length) {
    throw new Error(ErrorMessages.DUPLICATE_NUMBER);
  }
}

export function validLength(numbers, length) {
  if (numbers.length !== length) {
    throw new Error(ErrorMessages.OUTSIDE_SET_NUMBER);
  }
}

export function isOneNumber(value) {
  if (isNaN(value)) {
    throw new Error(ErrorMessages.ONLY_ONE_NUMBER);
  }
}
