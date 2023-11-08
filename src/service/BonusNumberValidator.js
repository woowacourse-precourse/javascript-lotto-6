import { ERROR, LOTTO } from '../common/constants.js';
import { isElementInTarget, isInRange, isNumeric } from '../common/validator.js';

import { throwError } from '../common/utils.js';

class BonusNumberValidator {
  constructor(input) {
    this.input = input;
  };

  validate(winningNumbers) {
    this.#validateInput();
    this.#validateNumber();
    this.#validateRange();
    this.#validateUnique(winningNumbers);

    return this.input;
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

  #validateUnique(winningNumbers) {
    if (isElementInTarget(winningNumbers, parseInt(this.input, 10))) {
      throwError(ERROR.bonus_duplicate);
    }
  };
};

export default BonusNumberValidator;
