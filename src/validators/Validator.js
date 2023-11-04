import { ERROR_MESSAGES } from '../constants/messages.js';
import AppError from '../errors/AppError.js';
import {
  isValidLength,
  isValidRange,
  isValidUnique,
} from './is-valid-numbers/index.js';
import isValidType from './is-valid-type/index.js';
import isValidAmount from './is-vallid-amount/index.js';

const Validator = {
  validatePurchaseAmount(amount) {
    if (!isValidType(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidType);
    }

    if (!isValidAmount(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidAmount);
    }
  },

  validateLottoNumbers(numbers) {
    if (!isValidLength(numbers)) {
      throw new AppError(ERROR_MESSAGES.invalidNumberLength);
    }

    if (!isValidUnique(numbers)) {
      throw new AppError(ERROR_MESSAGES.invalidUnique);
    }

    if (!isValidRange(numbers)) {
      throw new AppError(ERROR_MESSAGES.invalidNumberRange);
    }
  },
};

export default Validator;
