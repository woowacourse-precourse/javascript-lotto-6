import { ERROR_MESSAGES } from '../constants/messages.js';
import CustomError from '../errors/CustomError.js';
import isValidAmount from './is-vallid-amount/index.js';

const Validator = {
  validatePurchaseAmount(amount) {
    if (isValidAmount(amount)) {
      throw new CustomError(ERROR_MESSAGES.invalidAmount);
    }
  },
};

export default Validator;
