import ErrorMessage from '../errors/ErrorMessage.js';
import ERROR from '../../constants/error.js';

function validatePriceUnit(input) {}

function validatePositiveNumber() {}

function validateInteger() {}

function validateNaturalNumber() {}

function validateNoDuplication() {}

function validateNoIncludeBlank() {}

function validateDrawCases() {}

function validateLottoBonusDuplication() {}

class InputValidator {
  validateNumber(input) {
    if (isNaN(input)) {
      throw new ErrorMessage(ERROR.number.notNumber);
    }
  }
}

export default InputValidator;
