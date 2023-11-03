import { CONSTANT, ERROR } from '../constants/Constant.js';
import ValidationError from '../ValidationError.js';

const AmountValidator = {
  checkIsNotNumber(userInput) {
    if (Number.isNaN(Number(userInput)) || userInput === '') {
      throw new ValidationError(ERROR.isNotNumber);
    }
  },
  checkIsNotInUnit(userInput) {
    if (userInput % CONSTANT.amountUnit !== 0) {
      throw new ValidationError(ERROR.isNotInAmountUnit);
    }
  },
  checkIsNegative(userInput) {
    if (userInput <= 0) {
      throw new ValidationError(ERROR.isNegative);
    }
  },
};

export default AmountValidator;
