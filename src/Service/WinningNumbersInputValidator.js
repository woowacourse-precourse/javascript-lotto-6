import { WINNING_NUMBERS_ERROR_MESSAGES } from '../Constant/Constants.js';
import {
  isValidWinningNumbersLength,
  isNumbers,
  isOutOfRangeInNumbers,
  isDuplicated,
} from './Common.js';

class WinningNumbersInputValidator {
  validateWinningNumbersInput(winningNumbersInput) {
    this.validateWinningNumbersLength(winningNumbersInput);
    this.validateNumbers(winningNumbersInput);
    this.validateNumbersInRange(winningNumbersInput);
    this.validateNumbersDuplicated(winningNumbersInput);
    return true;
  }

  validateWinningNumbersLength(winningNumbersInput) {
    if (!isValidWinningNumbersLength(winningNumbersInput)) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGES.INVALID_NUMBERS_LENGTH);
    }
  }

  validateNumbers(winningNumbersInput) {
    if (!isNumbers(winningNumbersInput)) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGES.NOT_NUMBER);
    }
  }

  validateNumbersInRange(winningNumbersInput) {
    if (isOutOfRangeInNumbers(winningNumbersInput)) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  validateNumbersDuplicated(winningNumbersInput) {
    if (isDuplicated(winningNumbersInput)) {
      throw new Error(WINNING_NUMBERS_ERROR_MESSAGES.DUPLICATED);
    }
  }
}

export default WinningNumbersInputValidator;
