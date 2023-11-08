import { ErrorMessage } from '../constants/ErrorMessage.js';

class Validator {
  static purchaseCostValidator(input) {
    const purchaseCost = parseInt(input, 10);
    if (Number.isNaN(purchaseCost)) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_COST);
    }
    if (purchaseCost < 0) {
      throw new Error(ErrorMessage.INVALID_PURCAHSE_COST_RANGE);
    }
    if (purchaseCost % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_COST_UNIT);
    }
  }

  static winningNumberValidator(input) {
    const winningNumber = input.split(',').map(number => {
      const parseNumber = parseInt(number.trim(), 10);
      if (Number.isNaN(parseNumber)) {
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
      }
      if (parseNumber < 1 || parseNumber > 45) {
        throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
      }
      return parseNumber;
    });
    if (winningNumber.length !== 6) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_RANGE);
    }
    if (new Set(winningNumber).size !== 6) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
    }
    return winningNumber;
  }

  static bonusNumberValidator(input, winningNumber) {
    const BonusNumber = parseInt(input, 10);
    if (Number.isNaN(BonusNumber)) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
    }
    if (BonusNumber < 1 || BonusNumber > 45) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIT);
    }
    if (winningNumber.includes(BonusNumber)) {
      throw new Error(ErrorMessage.INVALID_LOTTO_NUMBERS_UNIQUENESS);
    }
    return BonusNumber;
  }
}

export default Validator;
