import { ERROR_MESSAGE } from '../constants/messages';

class Validator {
  static amountValidator(purchaseAmount) {
    const NUMBER_REGEX = /^[0-9]+$/.test(purchaseAmount);
    if (!NUMBER_REGEX) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidNumber}`);

    if (purchaseAmount % 1000 !== 0) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidDivision}`);
    }

    if (purchaseAmount === '0') {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidQuantity}`);
    }
  }

  static winningNumberValidator(winningNumbers) {
    winningNumbers.forEach((v) => {
      if (v < 1 || v > 45) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidRange}`);
    });

    if (winningNumbers.length !== 6) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidLength}`);
    }

    const BONUS_REGEXP = /^[0-9,]+$/.test(winningNumbers);
    if (!BONUS_REGEXP) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidBonus}`);

    const duplicateCheck = new Set(winningNumbers);
    if (duplicateCheck.size !== winningNumbers.length) {
      throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.invalidUnique}`);
    }
  }
}

export default Validator;
