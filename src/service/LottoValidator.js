import { LOTTO, ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isNumeric, isInRange } from '../common/validator.js';

class LottoValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateArray();
    this.#validateNumber();
    this.#validateRange();
  };

  #validateArray() {
    if (!Array.isArray(this.input)) {
      throwError(ERROR.not_lotto);
    }
  };

  #validateNumber() {
    this.input.forEach((num) => {
      if (!isNumeric(num)) {
        throwError(ERROR.numeric);
      }
    });
  };

  #validateRange() {
    this.input.forEach((num) => {
      if (!isInRange(num, LOTTO.min_number, LOTTO.max_number)) {
        throwError(ERROR.range);
      }
    });
  };
};

export default LottoValidator;
