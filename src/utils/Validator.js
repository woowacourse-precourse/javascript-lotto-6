import { ERROR_MESSAGE, LOTTO } from '../constants/constants.js';

const Validator = {
  validateMoney(purchaseMoney) {
    if (!this.isNumber(purchaseMoney)) {
      throw new Error(ERROR_MESSAGE.number);
    }
    if (Number(purchaseMoney) % LOTTO.price !== 0) {
      throw new Error(ERROR_MESSAGE.unit);
    }
  },

  isNumber(input) {
    return /^\d+$/.test(input);
  },
};

export default Validator;
