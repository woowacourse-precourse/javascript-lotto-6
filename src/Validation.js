import { ERROR_MESSAGE, LOTTO_NUMBER } from './constants.js';

class Validation {
  static validatePurchaseAmount(purchaseAmount) {
    if (
      Number(purchaseAmount) % LOTTO_NUMBER.minPrice !== 0 ||
      Number(purchaseAmount) < LOTTO_NUMBER.minPrice
    ) {
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
    return value >= LOTTO_NUMBER.inRangeFrom && value <= LOTTO_NUMBER.inRangeTo;
  }
}

export default Validation;
