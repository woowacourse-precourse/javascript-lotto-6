import { ERROR_MESSAGE } from '../constans/errorMessages'

export const inputPriceValidator = (priceInput) => {
  if (priceInput % 1000 !== 0) {
    throw new Error(ERROR_MESSAGE.notUnit);
  }
}