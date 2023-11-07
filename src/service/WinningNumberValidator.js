import { LOTTO, ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isCommaSeparated, containUniqueNumbersInString } from '../common/validator.js';

class WinningNumberValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateFormat();
    this.#validateUnique();
  };

  #validateFormat() {
    if (!isCommaSeparated(this.input, LOTTO.max_match)) {
      throwError(ERROR.winning_format);
    }
  };

  #validateUnique() {
    if (!containUniqueNumbersInString(this.input)) {
      throwError(ERROR.winning_duplicate);
    }
  };
};

export default WinningNumberValidator;
