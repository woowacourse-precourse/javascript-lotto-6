import { ERROR, LOTTO } from '../Constants/constants.js';

class validator {
  static validatePurchaseAmount(amount) {
    this.validatePurchaseAmountDivided(amount);
    this.validatePurchaseAmountIsNumber(amount);
  }

  static validatePurchaseAmountDivided(amount) {
    if ((amount * 1000) % 1000 !== 0) {
      throw new Error(ERROR.PREFIX + ERROR.PURCHASE_AMOUNT.NOT_PRIME_NUMBER);
    }
  }

  static validatePurchaseAmountIsNumber(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR.PREFIX + ERROR.PURCHASE_AMOUNT.IS_NOT_NUMBER);
    }
  }

  static validateLottoNumbers(numbers) {
    this.validateLottoNumbersLength(numbers);
    this.validateLottoNumbersDuplicate(numbers);
    this.validateLottoNumbersIsNumber(numbers);
    this.validateLottoNumbersRange(numbers);
  }

  static validateLottoNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.PREFIX + ERROR.LOTTO_NUMBERS.INVALID_LENGTH);
    }
  }

  static validateLottoNumbersDuplicate(numbers) {
    if (new Set(numbers).size !== LOTTO.LOTTO_NUMBERS) {
      throw new Error(ERROR.PREFIX + ERROR.LOTTO_NUMBERS.IS_DUPLICATE);
    }
  }

  static validateLottoNumbersIsNumber(numbers) {
    numbers.forEach(number => {
      if (isNaN(number)) {
        throw new Error(ERROR.PREFIX + ERROR.LOTTO_NUMBERS.IS_NOT_NUMBER);
      }
    });
  }

  static validateLottoNumbersRange(numbers) {
    numbers.forEach(number => {
      if (number < LOTTO.MIN_NUMBER || number > LOTTO.MAX_NUMBER) {
        throw new Error(ERROR.LOTTO_NUMBERS.INVALID_RANGE);
      }
    });
  }

  static validateBonusNumber(bonusNumber, winNumber) {
    this.validateBonusNumberIsDuplicate(bonusNumber, winNumber);
    this.validateBonusNumberIsNumber(bonusNumber);
    this.validateBonusNumberLength(bonusNumber);
  }

  static validateBonusNumberIsDuplicate(bonusNumber, winNumber) {
    if (winNumber.includes(bonusNumber)) {
      throw new Error(ERROR.BONUS_NUMBER.IS_DUPLICATE);
    }
  }
  static validateBonusNumberIsNumber(bonusNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR.BONUS_NUMBER.IS_NOT_NUMBER);
    }
  }
  static validateBonusNumberLength(bonusNumber) {
    if (bonusNumber > 10 || bonusNumber < 1) {
      throw new Error(ERROR.BONUS_NUMBER.INVALID_LENGTH);
    }
  }
}

export default validator;
