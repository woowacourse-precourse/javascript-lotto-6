import { LIMITS } from '../constants/fixedValue.js';

class Validate {
  static isNaturalNumber(inputString) {
    const naturalNumberPattern = /^[1-9]\d*$/;
    return naturalNumberPattern.test(inputString);
  }

  static isValidPurchaseAmount(inputString) {
    const purchaseAmount = Number(inputString);
    return purchaseAmount % LIMITS.priceUnit === 0;
  }

  static falseAndError(boolean, message) {
    if (boolean === false) {
      throw new Error(message);
    }
  }

  static trueAndError(boolean, message) {
    if (boolean === true) {
      throw new Error(message);
    }
  }

  static checkForDuplicateBonusNumber(winningNumbers, bonusNumber) {
    return !winningNumbers.includes(bonusNumber);
  }

  static hasDuplicates(winningNumbers) {
    return new Set(winningNumbers).size === winningNumbers.length;
  }
}

export default Validate;
