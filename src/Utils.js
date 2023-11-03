import { UNIT, SEPARATOR } from "./constants/rule.js";

class Utils {
  static getLottoAmount(sum) {
    const number = parseInt(sum, 10);
    return number / UNIT.PURCHASE;
  }

  static getAscendingSortedArray(array) {
    return array.sort((a, b) => a - b);
  }

  static convertStringIntoNumberArray(input) {
    return input.split(SEPARATOR.USER_LOTTO).map(Number);
  }
}

export default Utils;
