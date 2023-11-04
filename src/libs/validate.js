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

export { isInputEmpty, isInputNumeric, isDivisibleByThousand };
