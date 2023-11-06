import { ERROR_MESSAGE } from "../constant/Error.js";

export function checkString(num) {
  if (isNaN(num)) {
    throw new Error(ERROR_MESSAGE.inputString);
  }
}

export function checkNaturalNumber(num) {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error(ERROR_MESSAGE.inputNaturalNumber);
  }
}
