import { errorMessage } from "../constants/messages.js";

export const checkLottoPurchase = (cash) => {
  const isNotValid = (input) => {
    return isNaN(input) || input % 1000 != 0 || input <= 0;
  };
  if (isNotValid(cash)) throw new Error(errorMessage.INVALID_INTEGER);

  return true;
};
