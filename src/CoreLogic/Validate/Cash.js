import { ERROR_MESSAGES } from "../../constants/Messages";

export function validateCashCollection(INPUT_CASH) {
  validateCashInteger(INPUT_CASH);
  validateCashNone(INPUT_CASH);
}

//얘네도 넣어야 함.
export function validateCashInteger(INPUT_CASH) {
  if (+INPUT_CASH % 1000 === 0) {
    return INPUT_CASH;
  }
  throw new Error(ERROR_MESSAGES.CASH_NOT_INTEGER_IN_THOUSANDS);
}

export function validateCashNone(INPUT_CASH) {
  if (typeof INPUT_CASH === "undefined" || INPUT_CASH.trim() === "") {
    throw new Error(ERROR_MESSAGES.CASH_NOT_INTEGER_IN_THOUSANDS);
  }
}
