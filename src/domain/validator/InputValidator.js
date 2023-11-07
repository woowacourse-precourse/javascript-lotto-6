import ErrorMessage from '../errors/ErrorMessage.js';
import ERROR from '../../constants/error.js';
import NUMBER from '../../constants/number.js';

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

  validatePositiveNumber(input) {
    if (input < 0) {
      throw new ErrorMessage(ERROR.number.negativeNumber);
    }
  }

  validateInteger(input) {
    if (!Number.isInteger(input)) {
      throw new ErrorMessage(ERROR.number.notInterger);
    }
  }
  validateNaturalNumber(input) {
    this.validateNumber(input);
    this.validatePositiveNumber(input);
    this.validateInteger(input);
  }

  validateUnitCost(input) {
    if (input % NUMBER.unitCost != 0) {
      throw new ErrorMessage(ERROR.cost.unmatchedUnit);
    }
  }
}

export default InputValidator;
