import ErrorMessage from '../errors/ErrorMessage.js';
import ERROR from '../../constants/error.js';
import NUMBER from '../../constants/number.js';

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
    if (input % NUMBER.unitCost !== 0) {
      throw new ErrorMessage(ERROR.cost.unmatchedUnit);
    }
  }

  validateNoDuplication(inputs) {
    if (inputs.length !== new Set(inputs).size) {
      throw new ErrorMessage(ERROR.lotto.duplication);
    }
  }

  validateDrawCases(inputs) {
    if (inputs.length !== NUMBER.drawCount) {
      throw new ErrorMessage(ERROR.lotto.drawCount);
    }
  }
}

export default InputValidator;
