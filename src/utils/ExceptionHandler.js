import AppError from '../errors/error.js';
import ERROR from '../constants/error.js';
import LOTTO from '../constants/lotto.js';
import { isValidNumber } from './index.js';

class ExceptionHandler {
  static throwAppError(message) {
    throw new AppError(message);
  }

  static validateAmount(amount) {
    const numericPattern = LOTTO.regexPatterns.numericPattern;
    if (!numericPattern.test(amount)) {
      this.throwAppError(ERROR.message.invalidPurchase);
    }

    if (amount % LOTTO.unit.value) {
      this.throwAppError(ERROR.message.invalidUnit);
    }

    return amount;
  }

  static validateWinningNumbers(winningNumbers) {
    const splitedWinningNumbers = this.getSplitedWinningNumbers(winningNumbers);
    const winningNumbersSet = this.getWinningNumbersSet(splitedWinningNumbers);

    this.checkNumberLimit(splitedWinningNumbers);
    this.checkWhiteSpace(splitedWinningNumbers);
    this.checkDuplicateNumber(winningNumbersSet);
    this.checkNumberRange(winningNumbersSet);
    this.checkZero(winningNumbersSet);

    return winningNumbers;
  }

  static getSplitedWinningNumbers(winningNumbers) {
    return winningNumbers.split(LOTTO.string.comma);
  }

  static getWinningNumbersSet(splitedWinningNumbers) {
    return new Set(splitedWinningNumbers.map(Number));
  }

  static checkNumberLimit(splitedWinningNumbers) {
    if (splitedWinningNumbers.length !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.invalidNumberLimit);
    }
  }

  static checkWhiteSpace(splitedWinningNumbers) {
    if (LOTTO.regexPatterns.whitespace.test(splitedWinningNumbers)) {
      throw new AppError(ERROR.message.invalidInput);
    }
  }

  static checkDuplicateNumber(winningNumbersSet) {
    if (winningNumbersSet.size !== LOTTO.number.limit) {
      throw new AppError(ERROR.message.duplicateNumber);
    }
  }

  static checkNumberRange(winningNumbersSet) {
    if (![...winningNumbersSet].every(isValidNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }
  }

  static checkZero(winningNumbersSet) {
    if (winningNumbersSet.has(LOTTO.number.zero)) {
      throw new AppError(ERROR.message.noZero);
    }
  }

  static validateBonusNumber(inputbonusNumber, winningNumbers) {
    const splitedWinningNumbers = this.getSplitedWinningNumbers(winningNumbers);
    const winningNumbersSet = this.getWinningNumbersSet(splitedWinningNumbers);
    const bonusNumber = Number(inputbonusNumber);

    this.checkInvalidInput(inputbonusNumber);
    this.checkInvalidNumber(bonusNumber);
    this.checkDuplicateBonusNumber(bonusNumber, winningNumbersSet);

    return bonusNumber;
  }

  static checkInvalidInput(inputbonusNumber) {
    if (
      inputbonusNumber.includes(LOTTO.string.comma) ||
      inputbonusNumber.includes(LOTTO.string.space)
    ) {
      throw new AppError(ERROR.message.invalidInput);
    }
  }

  static checkInvalidNumber(bonusNumber) {
    if (!isValidNumber(bonusNumber)) {
      throw new AppError(ERROR.message.invalidNumberRange);
    }
  }

  static checkDuplicateBonusNumber(bonusNumber, winningNumbersSet) {
    if (winningNumbersSet.has(bonusNumber)) {
      throw new AppError(ERROR.message.duplicateBonusNumber);
    }
  }
}

export default ExceptionHandler;
