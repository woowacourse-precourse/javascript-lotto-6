import { ERROR_MESSAGE } from './constants.js';

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    if (Number(purchaseAmount) % 1000 !== 0 || Number(purchaseAmount) < 1000) {
      throw new Error(ERROR_MESSAGE.invalidPusrchaseAmount);
    }

    return purchaseAmount;
  }

  static validateWinningNumbers(winningNumbers) {
    const numbers = winningNumbers.split(',').map((num) => Number(num.trim()));

    if (
      new Set(numbers).size !== 6 ||
      numbers.some((num) => !Validation.isSafeInteger(num) || !Validation.isInRange(num))
    ) {
      throw new Error(ERROR_MESSAGE.duplicationWinningNumbers);
    }

    return numbers;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const cleanedBonusNumber = Number(bonusNumber);
    if (
      !cleanedBonusNumber ||
      !Validation.isSafeInteger(cleanedBonusNumber) ||
      !Validation.isInRange(cleanedBonusNumber)
    ) {
      throw new Error(ERROR_MESSAGE.invalidBonusNumber);
    }
    if (winningNumbers.includes(cleanedBonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplicationBonusNumber);
    }

    return cleanedBonusNumber;
  }

  static isSafeInteger(value) {
    return Number.isSafeInteger(Number(value));
  }

  static isInRange(value) {
    return value >= 1 && value <= 45;
  }
}

export default Validation;
