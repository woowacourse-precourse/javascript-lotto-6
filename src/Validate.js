import { REGEX } from "./constants/rule.js";
import { ERROR } from "./constants/message.js";

class Validate {
  isValidPurchaseSum(num) {
    if (!this.isOnlyNumber(num)) {
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
}

export default Validate;
