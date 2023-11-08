import CustomError from '../CustomError.js';
import CONSTANTS from '../constants/Constants.js';
import ERROR from '../constants/Error.js';
import REGEXP from '../constants/RegExp.js';

class Validation {
  static isEmptyValue(inputValue) {
    if (!inputValue) {
      throw new CustomError(ERROR.EMPTY_INPUT);
    }
  }

  static isValidInputPurchaseAmount(purchaseAmount) {
    this.isEmptyValue(purchaseAmount);

    if (!purchaseAmount.match(REGEXP.PURCHASE_AMOUNT.FORMAT_CHECK)) {
      throw new CustomError(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_FORMAT);
    }
    if (
      purchaseAmount < CONSTANTS.MIN_PURCHASE_AMOUNT ||
      purchaseAmount > CONSTANTS.MAX_PURCHASE_AMOUNT
    ) {
      throw new CustomError(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_RANGE);
    }
    if (!Number.isInteger(Number(purchaseAmount) / CONSTANTS.LOTTO_PRICE)) {
      throw new CustomError(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_UNIT);
    }
  }

  static isValidInputWinningNumbers(winningNumbers) {
    this.isEmptyValue(winningNumbers);

    if (!winningNumbers.match(REGEXP.WINNING_NUMBER.CHARACTER_CHECK)) {
      throw new CustomError(ERROR.INPUT_NUMBERS.INVALID_CHARACTER);
    }
    if (!winningNumbers.match(REGEXP.WINNING_NUMBER.FORMAT_CHECK)) {
      throw new CustomError(ERROR.INPUT_NUMBERS.INVALID_FORMAT);
    }
  }

  static isValidInputBonusNumber(bonusNumber) {
    this.isEmptyValue(bonusNumber);

    if (
      !bonusNumber.match(REGEXP.BONUS_NUMBER.FORMAT_CHECK) ||
      Number(bonusNumber) < 1 ||
      Number(bonusNumber) > 45
    ) {
      throw new CustomError(ERROR.INPUT_BONUS_NUMBER.INVALID_FORMAT);
    }
  }

  static bonusNumberIncludedWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new CustomError(ERROR.INPUT_BONUS_NUMBER.INCLUDE_WINNING_NUMBERS);
    }
  }
}

export default Validation;
