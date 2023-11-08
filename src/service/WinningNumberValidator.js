import { UTILS, LOTTO, ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isNumeric, isCommaSeparated, containUniqueNumbersInArray } from '../common/validator.js';

class WinningNumberValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateInput();
    this.#validateFormat();
    this.#validateNumber();
    this.#validateUnique();

    return this.input;
  };

  #validateInput() {
    if (!this.input) {
      throwError(ERROR.empty);
    }
  };

  #validateFormat() {
    if (!isCommaSeparated(this.input, LOTTO.max_match)) {
      throwError(ERROR.winning_format);
    }
    this.input =  this.input.split(UTILS.comma);
  };

  #validateNumber() {
    this.input.forEach((number) => {
      if (!isNumeric(number)) {
        throwError(ERROR.numeric);
      }
      this.input = this.input.map(Number);
    });
  };

  #validateUnique() {
    if (!containUniqueNumbersInArray(this.input)) {
      throwError(ERROR.winning_duplicate);
    }
  };
};

export default WinningNumberValidator;
