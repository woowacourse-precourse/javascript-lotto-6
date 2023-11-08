import { ERROR_MESSAGES } from '../constants/messages.js';
import AppError from '../errors/AppError.js';
import isValidBonus from './isValidNumber/index.js';
import isValidType from './isValidType/index.js';
import {
  isValidLength,
  isValidRange,
  isValidUnique,
} from './isValidNumbers/index.js';
import {
  isValidAmountUnit,
  isValidAmountRange,
} from './isValidAmount/index.js';

const Validator = {
  /**
   * 구입 금액 입력에 대한 유효성 검증 메소드
   * @param {number} amount
   */
  validatePurchaseAmount(amount) {
    if (!amount && !isValidType(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidType);
    }

    if (!isValidAmountUnit(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidAmount);
    }

    if (!isValidAmountRange(amount)) {
      throw new AppError(ERROR_MESSAGES.invalidPurchaseRange);
    }
  },

  /**
   * 당첨 번호 입력에 대한 유효성 검증 메소드
   * @param {number[]} winningNumbers
   */
  validateLottoNumbers(winningNumbers) {
    if (!isValidLength(winningNumbers)) {
      throw new AppError(ERROR_MESSAGES.invalidNumberLength);
    }

    if (!isValidUnique(winningNumbers)) {
      throw new AppError(ERROR_MESSAGES.invalidUnique);
    }

    winningNumbers.forEach(number => {
      if (!isValidRange(number)) {
        throw new AppError(ERROR_MESSAGES.invalidNumberRange);
      }
    });
  },

  /**
   * 보너스 번호 입력에 대한 유효성 검증 메소드
   * @param {number} bonusNumber
   * @param {number[]} winningNumbers
   */
  validateBonusNumber(bonusNumber, winningNumbers) {
    if (!bonusNumber && !isValidType(bonusNumber)) {
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
