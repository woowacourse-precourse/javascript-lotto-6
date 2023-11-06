import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

const Validator = {
  remainderNotZero: purchaseAmount => {
    if (purchaseAmount % CONSTANTS.purchaseAmount.amountDivisor !== 0)
      throw new Error(ERROR.message.remainderNotZero);
  },
  invalidNumber: number => {
    if (isNaN(number)) throw new Error(ERROR.message.invalidNumber);
  },
  missingValue: value => {
    if (!value) throw new Error(ERROR.message.missingValue);
  },
  negativeNumber: purchaseAmount => {
    if (purchaseAmount < 0) throw new Error(ERROR.message.negativeNumber);
  },
  invalidSeparator: numbers => {
    if (numbers.includes('')) throw new Error(ERROR.message.invalidSeparator);
  },
  invalidNumbersCount: numbers => {
    if (numbers.length !== CONSTANTS.number.winningNumbersCount)
      throw new Error(ERROR.message.invalidNumbersCount);
  },
  invalidRange: numbers => {
    numbers.forEach(number => {
      if (Number(number) < CONSTANTS.number.min || Number(number) > CONSTANTS.number.max)
        throw new Error(ERROR.message.invalidRange);
    });
  },
};

export default Validator;
