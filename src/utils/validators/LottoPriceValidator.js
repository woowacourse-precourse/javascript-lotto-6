import { LOTTO } from '../constants/constants';
import { LOTTO_PRICE_MESSAGE } from '../constants/errorMessages';
import CustomError from '../errors/CustomError';

export const lottoPriceValidator = (price) => {
  validateType(price);
  validatePrice(price);
};

const validateType = (price) => {
  if (typeof price !== 'number' || Number.isNaN(price)) {
    throw new CustomError(LOTTO_PRICE_MESSAGE.invalidNumber);
  }
};

const validatePrice = (price) => {
  if (price % LOTTO.price !== 0) {
    throw new CustomError(LOTTO_PRICE_MESSAGE.invalidPrice);
  }
};
