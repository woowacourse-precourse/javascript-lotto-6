import { ERROR_MESSAGE } from './constants.js';

class Validation {
  static cleanAndValidateInput({ input, errorMessage, checkRange = false }) {
    const cleanedInput = Validation.cleanInput(input);
    const intValue = Number(cleanedInput);

    if (
      !cleanedInput ||
      !Validation.isSafeInteger(intValue) ||
      (checkRange && !Validation.isInRange(intValue))
    ) {
      throw new Error(errorMessage);
    }

    return intValue;
  }

  static validateIntegerArray(numbers, errorMessage, checkRange = true) {
    const cleanedNumbers = Validation.cleanInput(numbers);
    const parsedNumbers = cleanedNumbers
      .split(',')
      .map((num) => Validation.cleanAndValidateInput({ input: num, errorMessage, checkRange }));

    return parsedNumbers;
  }

  static validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0 || purchaseAmount < 1000) {
      Validation.cleanAndValidateInput({
        input: purchaseAmount,
        errorMessage: ERROR_MESSAGE.invalidPusrchaseAmount,
        checkRange: true,
      });
    }

    return purchaseAmount;
  }

  static validateWinningNumbers(winningNumbers) {
    const numbers = Validation.validateIntegerArray(winningNumbers, ERROR_MESSAGE.duplicationWinningNumbers);

    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.duplicationWinningNumbers);
    }

    return numbers;
  }

  static validateBonusNumber(bonusNumber, winningNumbers) {
    const cleanedBonusNumber = Validation.cleanAndValidateInput({
      input: bonusNumber,
      errorMessage: ERROR_MESSAGE.invalidBonusNumber,
      checkRange: true,
    });

    if (winningNumbers.includes(cleanedBonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplicationBonusNumber);
    }

    return cleanedBonusNumber;
  }

  static cleanInput(input) {
    return input.trim();
  }

  static isSafeInteger(value) {
    return Number.isSafeInteger(Number(value));
  }

  static isInRange(value, minValue = 1, maxValue = 45) {
    return value >= minValue && value <= maxValue;
  }
}

export default Validation;
