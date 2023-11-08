/* eslint-disable max-lines-per-function */
import CONSTANTS from '../constants/Constants.js';
import ERROR from '../constants/Error.js';
import REGEXP from '../constants/RegExp.js';
import messageFormat from './messageFormat.js';

const isDuplicate = arr => {
  return arr.some((item, index) => index !== arr.lastIndexOf(item));
};

const validation = {
  isEmptyValue(inputValue) {
    if (!inputValue) {
      throw new Error(messageFormat.error(ERROR.EMPTY_INPUT));
    }
  },

  isValidInputPurchaseAmount(purchaseAmount) {
    this.isEmptyValue(purchaseAmount);

    if (!purchaseAmount.match(REGEXP.PURCHASE_AMOUNT.FORMAT_CHECK)) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_FORMAT),
      );
    }

    if (
      purchaseAmount < CONSTANTS.MIN_PURCHASE_AMOUNT ||
      purchaseAmount > CONSTANTS.MAX_PURCHASE_AMOUNT
    ) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_RANGE),
      );
    }

    if (!Number.isInteger(Number(purchaseAmount) / CONSTANTS.LOTTO_PRICE)) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_PURCHASE_AMOUNT.INVALID_PRICE_UNIT),
      );
    }
  },

  isValidInputWinningNumbers(winningNumbers) {
    this.isEmptyValue(winningNumbers);

    if (!winningNumbers.match(REGEXP.WINNING_NUMBER.CHARACTER_CHECK)) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_WINNING_NUMBERS.INVALID_CHARACTER),
      );
    }

    if (!winningNumbers.match(REGEXP.WINNING_NUMBER.FORMAT_CHECK)) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_WINNING_NUMBERS.INVALID_FORMAT),
      );
    }

    const winningNumberList = winningNumbers.split(',');

    if (winningNumberList.length !== 6) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_WINNING_NUMBERS.INVALID_LENGTH),
      );
    }

    if (winningNumberList.some(item => item < 1 || item > 45)) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_WINNING_NUMBERS.INVALID_NUMBER_RANGE),
      );
    }

    if (isDuplicate(winningNumberList)) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_WINNING_NUMBERS.DUPLICATE_VALUE),
      );
    }
  },

  isValidInputBonusNumber(bonusNumber) {
    this.isEmptyValue(bonusNumber);

    if (
      !bonusNumber.match(REGEXP.BONUS_NUMBER.FORMAT_CHECK) ||
      Number(bonusNumber) < 1 ||
      Number(bonusNumber) > 45
    ) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_BONUS_NUMBER.INVALID_FORMAT),
      );
    }
  },

  bonusNumberIncludedWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(Number(bonusNumber))) {
      throw new Error(
        messageFormat.error(ERROR.INPUT_BONUS_NUMBER.INCLUDE_WINNING_NUMBERS),
      );
    }
  },
};

export default validation;
