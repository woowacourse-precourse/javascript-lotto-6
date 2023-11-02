import { REGEX, UNIT } from "./constants/rule.js";
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
}

export default Validate;
