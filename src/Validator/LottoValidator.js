import { ERROR_MESSAGE, LOTTO_INFO } from '../utils/constants';

const validatePurchaseAmount = purchaseAmount => {
  if (purchaseAmount % LOTTO_INFO.PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_AMOUNT_UNIT);
  }
  if (
    purchaseAmount < LOTTO_INFO.MIN_LOTTO_MONEY
    || LOTTO_INFO.MAX_LOTTO_MONEY < purchaseAmount
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_AMOUNT_RANGE);
  }
};

export default { validatePurchaseAmount };
