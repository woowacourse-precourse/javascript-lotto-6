import { ERROR_MESSAGE } from '../constants/message.js';

const validation = {
  validatePurchaseAmount(input) {
    if (input % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.INVALID_PURCHASE_AMOUNT);
    }
  },

  validateWinningNumbers(input) {
    if (!input.includes(',')) {
      throw new Error(ERROR_MESSAGE.INVALID_COMMA_SEPARATED);
    }
  },

  validateBonusNumber(input, winningNumbers) {
    if (Number.isNaN(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INPUT);
    }
    if (winningNumbers.includes(input)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBERS);
    }
    if (input > 45 || input < 1) {
      throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
    }
  },
};

export default validation;
