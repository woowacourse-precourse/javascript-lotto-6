import { throwError } from '../common/utils.js';
import { LOTTO, ERROR } from '../common/constants.js';
import { isNumeric, isElementInString, isInRange } from '../common/validator.js';

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

  validateUnique(winningNumbers) {
    if (!isElementInString(winningNumbers, this.input)) {
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
    if (!isInRange(this.input, LOTTO.min_number, LOTTO.max_number)) {
      throwError(ERROR.range);
    }
  };
};

export default BonusNumberValidator;
