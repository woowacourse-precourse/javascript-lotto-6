import CustomError from '../../errors/CustomError';
import ERROR from '../constants/error';
import SYMBOL from '../constants/symbol';

function validateInputLength(input) {
  if (!input.length) {
    throw new CustomError(ERROR.inputView.emptyInput);
  }
}

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
  isValidInput(input) {
    validateInputLength(input);
    const number = Number(input);
    validateIsNumber(number);
    validateNonNegativeValue(number);
    validateIsInteger(number);
  },

  areValidMultipleInputs(input) {
    const inputNumberArray = input.split(SYMBOL.inputNumberSeparator);
    inputNumberArray.forEach(item => this.isValidInput(item));
  },
};

export default InputViewValidator;
