import { LOTTO, REGEX, UNIT } from "./constants/rule.js";
import { ERROR } from "./constants/message.js";

class Validate {
  isValidPurchaseSum(num) {
    if (!this.isOnlyNumber(num) || !this.isThousandUnit(num)) {
      return false;
    }

    return true;
  }

  isOnlyNumber(input) {
    if (!REGEX.ONLY_NUMBER.test(input)) {
      throw new Error(ERROR.NOT_ONLY_NUMBER);
    }

    return true;
  }

  isThousandUnit(input) {
    const number = parseInt(input, 10);

    if (number % UNIT.PURCHASE !== 0) {
      throw new Error(ERROR.INVALID_UNIT);
    }

    return true;
  }

  isOnlyNumberAndComma(input) {
    if (!REGEX.ONLY_NUMBER_AND_COMMA.test(input)) {
      throw new Error(ERROR.NOT_ONLY_NUMBER_AND_COMMA);
    }

    return true;
  }

  isValidUserLottoInput(input) {
    if (
      !this.isValidLength(input) ||
      !this.isValidRange(input) ||
      !this.isDuplicate(input)
    ) {
      return false;
    }

    return true;
  }

  isValidLength(input) {
    if (input.length !== LOTTO.LENGTH) {
      throw new Error(ERROR.INVALID_LOTTO_LENGTH);
    }

    return true;
  }

  isValidRange(input) {
    const isValid = input.every(
      (value) => value >= LOTTO.MIN_RANGE && value <= LOTTO.MAX_RANGE
    );

    if (!isValid) {
      throw new Error(ERROR.INVALID_RANGE);
    }

    return true;
  }

  isDuplicate(input) {
    const set = new Set(input);

    if (set.size !== input.length) {
      throw new Error(ERROR.DUPLICATE_EXIST);
    }

    return true;
  }

  isValidBonusNumber(input) {
    if (!this.isOnlyNumber(input)) {
      return false;
    }

    return true;
  }
}

export default Validate;
