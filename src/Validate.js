import { LOTTO, REGEX, UNIT } from "./constants/rule";
import { ERROR } from "./constants/message";

class Validate {
  isValidPurchaseSum(num) {
    if (
      !this.#isOnlyNumber(num) ||
      !this.#isGreaterThanZero(num) ||
      !this.#isThousandUnit(num)
    ) {
      return false;
    }

    return true;
  }

  #isOnlyNumber(input) {
    if (!REGEX.ONLY_NUMBER.test(input)) {
      throw new Error(ERROR.NOT_ONLY_NUMBER);
    }

    return true;
  }

  #isGreaterThanZero(input) {
    const number = parseInt(input, 10);

    if (number <= 0) {
      throw new Error(ERROR.LOWER_THAN_ZERO);
    }

    return true;
  }

  #isThousandUnit(input) {
    const number = parseInt(input, 10);

    if (number % UNIT.PURCHASE !== 0) {
      throw new Error(ERROR.INVALID_UNIT);
    }

    return true;
  }

  static isOnlyNumberAndComma(input) {
    if (!REGEX.ONLY_NUMBER_AND_COMMA.test(input)) {
      throw new Error(ERROR.NOT_ONLY_NUMBER_AND_COMMA);
    }

    return true;
  }

  isValidUserLottoInput(input) {
    if (
      this.#isExistNaN(input) ||
      !this.#isValidLength(input) ||
      !this.#isValidRangeEachLotto(input) ||
      this.#isDuplicate(input)
    ) {
      return false;
    }

    return true;
  }

  #isExistNaN(input) {
    const isAnyNaN = input.some((value) => Number.isNaN(value));

    if (isAnyNaN) {
      throw new Error(ERROR.INVALID_FORMAT);
    }

    return false;
  }

  #isValidLength(input) {
    if (input.length !== LOTTO.LENGTH) {
      throw new Error(ERROR.INVALID_LOTTO_LENGTH);
    }

    return true;
  }

  #isValidRangeEachLotto(input) {
    const isValid = input.every((value) => this.#isValidRange(value));

    if (!isValid) {
      return false;
    }

    return true;
  }

  #isValidRange(value) {
    if (typeof value !== "number") {
      value = parseInt(value, 10);
    }

    if (value < LOTTO.MIN_RANGE || value > LOTTO.MAX_RANGE) {
      throw new Error(ERROR.INVALID_RANGE);
    }

    return true;
  }

  #isDuplicate(input) {
    const set = new Set(input);

    if (set.size !== input.length) {
      throw new Error(ERROR.DUPLICATE_EXIST);
    }

    return false;
  }

  isValidBonusNumber(input, lotto) {
    if (
      !this.#isOnlyNumber(input) ||
      !this.#isValidRange(input) ||
      this.#isExistInLotto(input, lotto)
    ) {
      return false;
    }

    return true;
  }

  #isExistInLotto(input, lotto) {
    if (typeof input !== "number") {
      input = parseInt(input, 10);
    }

    if (lotto.includes(input)) {
      throw new Error(ERROR.ALREADY_EXIST);
    }

    return false;
  }
}

export default Validate;
