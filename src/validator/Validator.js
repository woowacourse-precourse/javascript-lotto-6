import * as Utils from './validatorutils.js';
import ErrorMessages from '../constants/error.js';

class LottoValidator {
  validatePurchaseAmount(amount) {
    Utils.isNumber(amount);
    if (amount % 1000 !== 0 || amount <= 0) {
      throw new Error(ErrorMessages.UNDIVIDED_AMOUNT);
    }
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      Utils.isNumber(number);
      Utils.outNumberRange(number);
    });
    Utils.isNotDuplicate(numbers);
    Utils.validLength(numbers, 6);
  }

  validateBonusNumber(bonusNumber, winningNumbers) {
    Utils.isOneNumber(bonusNumber);
    Utils.outNumberRange(bonusNumber);
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ErrorMessages.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default LottoValidator;
