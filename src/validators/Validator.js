import { ERROR_MESSAGES } from '../constants/messages.js';
import AppError from '../errors/AppError.js';
import isValidBonus from './is-valid-number/index.js';
import {
  isValidLength,
  isValidRange,
  isValidUnique,
} from './is-valid-numbers/index.js';
import isValidType from './is-valid-type/index.js';
import {
  isValidAmountUnit,
  isValidAmountRange,
} from './is-vallid-amount/index.js';

const Validator = {
  validatePurchaseAmount(amount) {
    if (!isValidType(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidType);
    }

    if (!isValidAmountUnit(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidAmount);
    }

    if (!isValidAmountRange(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidPurchaseRange);
    }
  },

  validateLottoNumbers(numbers) {
    if (!isValidLength(numbers)) {
      throw new AppError(ERROR_MESSAGES.invalidNumberLength);
    }

    if (!isValidUnique(numbers)) {
      throw new AppError(ERROR_MESSAGES.invalidUnique);
    }

    numbers.forEach(number => {
      if (!isValidRange(number)) {
        throw new AppError(ERROR_MESSAGES.invalidNumberRange);
      }
    });
  },

  validateBonusNumber(bonusNumber, winningNumbers) {
    if (!isValidType(bonusNumber)) {
      throw new AppError(ERROR_MESSAGES.invalidType);
    }

    if (!isValidRange(bonusNumber)) {
      throw new AppError(ERROR_MESSAGES.invalidNumberRange);
    }

    if (!isValidBonus(bonusNumber, winningNumbers)) {
      throw new AppError(ERROR_MESSAGES.invalidBonusNumber);
    }
  },
};

export default Validator;
