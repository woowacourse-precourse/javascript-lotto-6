import { ERRORS, LOTTO_GAME_RULE } from "../utils/constants.js";

class InputError {
  static checkEmpty(input) {
    if (input.trim() === "") {
      throw new Error(`${ERRORS.error} ${ERRORS.emptyInputError}`);
    }
  }

  static checkInvalidAmount(input) {
    if (input % LOTTO_GAME_RULE.lottoAmount !== 0) {
      throw new Error(`${ERRORS.error} ${ERRORS.invalidAmountError}`);
    }
  }

  static checkNonNumeric(input) {
    if (isNaN(input)) {
      throw new Error(`${ERRORS.error} ${ERRORS.nonNumericError}`);
    }
  }

  static checkNagativeNumber(input) {
    if (input <= 0) {
      throw new Error(`${ERRORS.error} ${ERRORS.negativNumberError}`);
    }
  }

  static checkOutOfRangeNumber(input) {
    if (input < 1 || input > 45) {
      throw new Error(`${ERRORS.error} ${ERRORS.outOfRangeNumberError}`);
    }
  }

  static checkNumberLength(input) {
    if (input.length !== 6) {
      throw new Error(`${ERRORS.error} ${ERRORS.numberLengthError}`);
    }
  }

  static checkDuplicateLength(input) {
    if (new Set(input).size !== 6) {
      throw new Error(`${ERRORS.error} ${ERRORS.duplicatedNumberError}`);
    }
  }
}

export default InputError;
