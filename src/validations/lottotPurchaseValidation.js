import { errorMessage } from '../constants/messages';

export const checkLottoPurchase = cash => {
  const isNotValid = input => {
    return Number.isNaN(input) || input % 1000 !== 0 || input <= 0;
  };
  if (isNotValid(cash)) throw new Error(errorMessage.INVALID_INTEGER);

  return true;
};
