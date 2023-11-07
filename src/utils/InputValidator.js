import { ERROR_MESSAGES } from '../constants/ErrorMessages';
import { GAME_SETTINGS } from '../constants/GameSettings';

export default class InputValidator {
  static validatePurchaseAmount(amount) {
    if (!/^\d+$/.test(amount)) {
      throw new Error(ERROR_MESSAGES.INVALID_FORMAT);
    }

    const numericAmount = parseInt(amount, 10);

    if (numericAmount <= 0) {
      throw new Error(ERROR_MESSAGES.AMOUNT_NOT_IN_UNITS);
    }

    if (numericAmount % GAME_SETTINGS.TICKET_PRICE !== 0) {
      throw new Error(ERROR_MESSAGES.AMOUNT_NOT_IN_UNITS);
    }
  }

  static parseAndValidateNumbers(numbersString) {
    return numbersString.split(',').map((numString) => {
      const number = parseInt(numString.trim(), 10);

      if (Number.isNaN(number)) {
        throw new Error(ERROR_MESSAGES.EMPTY_NUMBER);
      }
      if (number < GAME_SETTINGS.MIN_LOTTO_NUMBER || number > GAME_SETTINGS.MAX_LOTTO_NUMBER) {
        throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
      }
      return number;
    });
  }

  static validateWinningNumbers(winningNumbersString) {
    const winningNumbers = InputValidator.parseAndValidateNumbers(winningNumbersString);

    if (winningNumbers.length !== GAME_SETTINGS.NUMBERS_PER_TICKET) {
      throw new Error(ERROR_MESSAGES.NOT_SIX_NUMBERS);
    }
    if (new Set(winningNumbers).size !== GAME_SETTINGS.NUMBERS_PER_TICKET) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  static validateBonusNumber(bonusNumberString, winningNumbersString) {
    const bonusNumber = parseInt(bonusNumberString.trim(), 10);

    if (
      Number.isNaN(bonusNumber) ||
      bonusNumber < GAME_SETTINGS.MIN_LOTTO_NUMBER ||
      bonusNumber > GAME_SETTINGS.MAX_LOTTO_NUMBER
    ) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }

    const winningNumbers = InputValidator.parseAndValidateNumbers(winningNumbersString);
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}
