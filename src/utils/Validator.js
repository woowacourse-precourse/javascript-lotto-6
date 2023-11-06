import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

const Validator = {
  remainderNotZero: purchaseAmount => {
    if (purchaseAmount % CONSTANTS.purchaseAmount.amountDivisor !== 0)
      throw new Error(ERROR.message.remainderNotZero);
  },
  invalidNumber: purchaseAmount => {
    if (isNaN(purchaseAmount)) throw new Error(ERROR.message.invalidNumber);
  },
  missingValue: value => {
    if (!value) throw new Error(ERROR.message.missingValue);
  },
  negativeNumber: purchaseAmount => {
    if (purchaseAmount < 0) throw new Error(ERROR.message.negativeNumber);
  },
  invalidSeparator: winningNumbers => {
    if (winningNumbers.includes('')) throw new Error(ERROR.message.invalidSeparator);
  },
  invalidNumbersCount: winningNumbers => {
    if (winningNumbers.length !== CONSTANTS.winningNumbers.count)
      throw new Error(ERROR.message.invalidNumbersCount);
  },
};

export default Validator;
