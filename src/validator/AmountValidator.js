import { CONSTANT, ERROR } from '../constants/Constant.js';
import ValidationError from '../ValidationError.js';

const AmountValidator = {
  checkIsNotInUnit(userInput) {
    if (userInput % CONSTANT.amountUnit !== 0) {
      throw new ValidationError(ERROR.isNotInAmountUnit);
    }
  },
};

export default AmountValidator;
