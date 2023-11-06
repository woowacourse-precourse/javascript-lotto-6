import ERROR from '../constants/error.js';
import SYMBOL from '../constants/symbol.js';

function validateIsNumber(input) {
  if (Number.isNaN(input)) {
    throw new Error(ERROR.inputView.notNumber);
  }
}

function validateNonNegativeValue(input) {
  if (input < 0) {
    throw new Error(ERROR.inputView.negativeValue);
  }
}

function validateIsInteger(input) {
  if (!Number.isInteger(input)) {
    throw new Error(ERROR.inputView.notInteger);
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
