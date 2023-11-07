import { ERRORS, LOTTO_GAME_RULE } from "../utils/constants.js";

class InputError {
  static checkEmpty(input) {
    if (input.trim() === "") {
      throw new Error(`${ERRORS.error} ${ERRORS.emptyInputError}`);
    }
  }

  static checkInvalidAmount(input) {
    if (input % LOTTO_GAME_RULE.lottoAmout !== 0) {
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
    if (
      input < LOTTO_GAME_RULE.lottoNumber[0] ||
      input > LOTTO_GAME_RULE.lottoNumber[1]
    ) {
      throw new Error(`${ERRORS.error} ${ERRORS.outOfRangeNumberError}`);
    }
  }
}

export default InputError;
