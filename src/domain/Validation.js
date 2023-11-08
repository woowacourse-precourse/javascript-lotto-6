import CONSTANTS from '../constants/Constants';
import { ERROR_MESSAGES, CustomError } from '../constants/Errors';

class Validation {
  static isPurchaseMoneyValidated(purchaseMoneyInput) {
    if (Number.isNaN(Number(purchaseMoneyInput))) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmountType);
    }

    if (Number(purchaseMoneyInput) % 1000 !== 0) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmount);
    }

    if (purchaseMoneyInput === '' || Number(purchaseMoneyInput) <= 0) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoPurchaseAmountZero);
    }
  }

  static validateLottoNumberLength(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberLength);
    }
  }

  static validateLottoNumberDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberDuplicate);
    }
  }

  static validateLottoNumberType(numbers) {
    if (numbers.some(number => CONSTANTS.numberTypeRegex.test(number))) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberType);
    }
  }

  static validateLottoNumberRange(numbers) {
    if (
      numbers.some(
        number => number > CONSTANTS.maxRange || number < CONSTANTS.minRange,
      )
    ) {
      throw new CustomError(ERROR_MESSAGES.invalidLottoNumberRange);
    }
  }

  static isLottoNumbersValidated(numbers) {
    this.validateLottoNumberType(numbers);
    this.validateLottoNumberLength(numbers);
    this.validateLottoNumberDuplicate(numbers);
    this.validateLottoNumberRange(numbers);
  }

  static isBonusNumberValidated(bonusNumber, winningLotto) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new CustomError(ERROR_MESSAGES.invalidBonusNumberType);
    }

    if (bonusNumber > CONSTANTS.maxRange || bonusNumber < CONSTANTS.minRange) {
      throw new CustomError(ERROR_MESSAGES.invalidBonusNumberRange);
    }

    if (winningLotto.includes(Number(bonusNumber))) {
      throw new CustomError(ERROR_MESSAGES.invalidBonusNumberDuplicate);
    }
  }
}

export default Validation;
