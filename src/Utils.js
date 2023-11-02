import { UNIT } from "./constants/rule.js";

class Utils {
  static getLottoAmount(sum) {
    const number = parseInt(sum, 10);
    return number / UNIT.PURCHASE;
  }
}

export default Utils;
