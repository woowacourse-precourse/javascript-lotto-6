import { ERROR_MESSAGE } from '../constans/errorMessages.js'

export const inputPriceValidator = (priceInput) => {
  if (priceInput % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.notUnit);
  }
  if (priceInput <= 0) {
    throw new Error(ERROR_MESSAGE.notZero);
  }
}