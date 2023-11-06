import { ERROR_MESSAGES } from '../constants/ErrorMessages';

export default class InputValidator {
  static validatePurchaseAmount(amount) {
    const numericAmount = parseInt(amount, 10);

    if (Number.isNaN(numericAmount)) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
    if (numericAmount <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
    }
    if (numericAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.AMOUNT_NOT_IN_UNITS);
    }
  }

  static parseAndValidateNumbers(numbersString) {
    return numbersString.split(',').map((numString) => {
      const number = parseInt(numString.trim(), 10);

      if (Number.isNaN(number)) {
        throw new Error(ERROR_MESSAGES.EMPTY_NUMBER);
      }
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
      }
      return number;
    });
  }

  static validateWinningNumbers(winningNumbersString) {
    const winningNumbers = InputValidator.parseAndValidateNumbers(winningNumbersString);

    if (winningNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.NOT_SIX_NUMBERS);
    }
    if (new Set(winningNumbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }
  }

  static validateBonusNumber(bonusNumberString, winningNumbersString) {
    const bonusNumber = parseInt(bonusNumberString.trim(), 10);

    if (Number.isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
    }

    const winningNumbers = InputValidator.parseAndValidateNumbers(winningNumbersString);
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}
