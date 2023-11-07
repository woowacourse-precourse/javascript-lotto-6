import CustomError from '../../errors/CustomError';
import ERROR from '../constants/error';
import SYMBOL from '../constants/symbol';

function validateIsNumber(input) {
  if (Number.isNaN(input)) {
    throw new CustomError(ERROR.inputView.notNumber);
  }
}

function validateNonNegativeValue(input) {
  if (input < 0) {
    throw new CustomError(ERROR.inputView.negativeValue);
  }
}

function validateIsInteger(input) {
  if (!Number.isInteger(input)) {
    throw new CustomError(ERROR.inputView.notInteger);
  }
}

const InputViewValidator = {
  isIntegerInput(input) {
    const number = Number(input);
    validateIsNumber(number);
    validateNonNegativeValue(number);
    validateIsInteger(number);
  },

  isIntegerArrayInput(input) {
    const inputNumberArray = input
      .split(SYMBOL.inputNumberSeparator)
      .map(Number);
    inputNumberArray.forEach(item => this.isIntegerInput(item));
  },
};

export default InputViewValidator;
