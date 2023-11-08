import { LOTTO, ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isNumeric, isDivisibleByUnit } from '../common/validator.js';

class MoneyValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateInput();
    this.#validateNumber();
    this.#validateMoneyUnit();
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

  #validateMoneyUnit() {
    if (!isDivisibleByUnit(this.input, LOTTO.money_unit)) {
      throwError(ERROR.money);
    }
  };
};

export default MoneyValidator;
