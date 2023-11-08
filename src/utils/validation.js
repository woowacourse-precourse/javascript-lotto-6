import { ERROR_MESSAGE } from '../constants/message.js';

const validation = {
  validatePurchaseAmount(input) {
    if (input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }
  },
};

export default validation;
