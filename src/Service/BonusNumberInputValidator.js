import { BONUS_NUMBER_ERROR_MESSAGES } from '../Constant/Constants.js';
import {
  isNumber,
  isOutOfRange,
  isDuplicatedWithWinningNumber,
} from './Common.js';

class BonusNumberInputValidator {
  validateBonusNumberInput({ bonusNumberInput, winningNumbers }) {
    this.validateNumber(bonusNumberInput);
    this.validateNumberInRange(bonusNumberInput);
    this.validateIsDuplicatedWithWinningNumber(
      bonusNumberInput,
      winningNumbers
    );
    return true;
  }

  validateNumber(bonusNumberInput) {
    if (!isNumber(bonusNumberInput)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGES.NOT_NUMBER);
    }
  }

  validateNumberInRange(bonusNumberInput) {
    if (isOutOfRange(bonusNumberInput)) {
      throw new Error(BONUS_NUMBER_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  validateIsDuplicatedWithWinningNumber(bonusNumberInput, winningNumbers) {
    if (isDuplicatedWithWinningNumber(bonusNumberInput, winningNumbers)) {
      throw new Error(
        BONUS_NUMBER_ERROR_MESSAGES.DUPLICATED_WITH_WINNING_NUMBER
      );
    }
  }
}

export default BonusNumberInputValidator;
