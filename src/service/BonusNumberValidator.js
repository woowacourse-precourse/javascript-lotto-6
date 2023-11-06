import { throwError } from '../common/utils.js';
import { ERROR } from '../common/constants.js';
import { isNumeric, isElementInArray, isInRange } from '../common/validator.js';

class BonusNumberValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateInput();
    this.#validateNumber();
    this.#validateRange();

    return this.input;
  };

  validateUnique(arr) {
    if (isElementInArray(arr, this.input)) {
      throwError(ERROR.bonus_duplicate);
    }
  };

  #validateInput() {
    if (!this.input) {
      throwError(ERROR.empty);
    }
  };

  #validateNumber() {
    if (!isNumeric(this.input)) {
      throwError(ERROR.numeric);
    }
  };

  #validateRange() {
    if (isInRange(this.input)) {
      throwError(ERROR.range);
    }
  };
};

export default BonusNumberValidator;
