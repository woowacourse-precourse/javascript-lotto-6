import { UNIT, SEPARATOR } from "./constants/rule";

class Utils {
  static getLottoAmount(sum) {
    const number = parseInt(sum, 10);
    return number / UNIT.PURCHASE;
  }

  static getAscendingSortedArray(array) {
    return array.sort((a, b) => a - b);
  }

  static convertStringIntoNumberArray(input) {
    return input
      .split(SEPARATOR.USER_LOTTO)
      .map((value) => parseInt(value, 10));
  }

  static convertToLocaleUnit(number, locale) {
    return number.toLocaleString(locale);
  }
}

export default Utils;
