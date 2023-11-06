import { checkString, checkNaturalNumber } from "./ValidateInputNumber.js";
import { ERROR_MESSAGE } from "../constant/Error.js";
const LOTTO_PRICE = 1000;
export function validateAmount(amount) {
  checkString(amount);
  checkNaturalNumber(amount);
  checkDivisibleThousand(amount);
}

function checkDivisibleThousand(amount) {
  if (amount % LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.amountDivisibleThousand);
  }
}
