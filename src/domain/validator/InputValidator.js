import ErrorMessage from '../errors/ErrorMessage.js';
import ERROR from '../../constants/error.js';
import NUMBER from '../../constants/number.js';

function checkBlank(input) {
  if (input === '') {
    throw new ErrorMessage(ERROR.lotto.includeBlank);
  }
}

function checkNotInRange(input) {
  if (input < NUMBER.minNumber || input > NUMBER.maxNumber) {
    throw new ErrorMessage(ERROR.lotto.notInRange);
  }
}

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
    const number = Number(input);
    this.validatePositiveNumber(number);
    this.validateInteger(number);
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
      throw new ErrorMessage(ERROR.lotto.wrongDrawCases);
    }
  }

  validateNoIncludeBlank(input) {
    const letters = input.replace(/ /g, '').split(',');
    for (const letter of letters) {
      checkBlank(letter);
    }
  }

  validateNotInRange(inputs) {
    for (const element of inputs) {
      checkNotInRange(element);
    }
  }
}

export default InputValidator;

// const i = new InputValidator();
// const numbers = [1, 2, 3, 4, 5, 6];
// for (const number of numbers) {
//   i.validateNaturalNumber(number);
// }
