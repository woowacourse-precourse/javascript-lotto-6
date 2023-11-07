import VALIDATOR from "./constant/VALIDATOR.js";
import LOTTO from "./constant/LOTTO.js";

class Validator {
  static isArrayLengthEqualTo(array, number) {
    return array.length === number;
  }

  static hasDuplicate(array) {
    return new Set(array).size !== array.length;
  }

  static isStringOnlyDigits(string) {
    return VALIDATOR.DIGITS_REGEX.test(string);
  }

  static isStringOnlyDigitsAndComma(string) {
    return VALIDATOR.DIGITS_COMMA_REGEX.test(string);
  }

  static isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
  }

  static startWithZero(string) {
    return string.charAt(0) === "0";
  }

  static inRange(number, includedStart, includedEnd) {
    return number >= includedStart && number <= includedEnd;
  }

  static isInLottoNumberRange(string) {
    if (!this.isStringOnlyDigits(string)) return false;
    if (this.startWithZero(string)) return false;

    return this.inRange(+string, LOTTO.START_NUMBER, LOTTO.END_NUMBER);
  }
}

export default Validator;
