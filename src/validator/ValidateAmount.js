import ValidateInputNumber from "./ValidateInputNumber.js";
import { ERROR_MESSAGE } from "../constant/Error.js";
import { LOTTO_PRICE } from "../constant/LottoInfo.js";

export function validateAmount(amountStr) {
  const amount = Number(amountStr);
  ValidateInputNumber.checkEmpty(amountStr);
  ValidateInputNumber.checkString(amount);
  ValidateInputNumber.checkNaturalNumber(amount);
  checkDivisibleThousand(amount);
}

function checkDivisibleThousand(amount) {
  if (amount % LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.amountDivisibleThousand);
  }
}
