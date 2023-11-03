import { ERROR_MESSAGES } from '../constants/messages.js';
import isValidAmount from './is-vallid-amount/index.js';

const Validator = {
  validatePurchaseAmount(amount) {
    if (!isValidAmount(amount)) {
      throw new Error(ERROR_MESSAGES.invalidAmount);
    }
  },
};

export default Validator;
