import { LOTTO, ERROR } from '../common/constants.js';
import { throwError } from '../common/utils.js';
import { isNumeric, isInRange, containUniqueNumbersInArray, isArrayLengthEqualTo } from '../common/validator.js';

class LottoValidator {
  constructor(input) {
    this.input = input;
  };

  validate() {
    this.#validateArray();
    this.#validateNumber();
    this.#validateRange();
    this.#validateUnique();
    this.#validateLength();
  };

  #validateArray() {
    if (!Array.isArray(this.input)) {
      throwError(ERROR.not_lotto);
    }
  };

  #validateNumber() {
    this.input.forEach((number) => {
      if (!isNumeric(number)) {
        throwError(ERROR.numeric);
      }
    });
  };

  #validateRange() {
    this.input.forEach((number) => {
      if (!isInRange(number, LOTTO.min_number, LOTTO.max_number)) {
        throwError(ERROR.range);
      }
    });
  };

  #validateUnique() {
    if (!containUniqueNumbersInArray(this.input)) {
      throwError(ERROR.lotto_duplicate);
    }
  };

  #validateLength() {
    if (!isArrayLengthEqualTo(this.input, LOTTO.max_match)) {
      throwError(ERROR.lotto_length);
    }
  };
};

export default LottoValidator;
