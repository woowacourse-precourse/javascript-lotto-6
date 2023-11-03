import VALIDATOR from "./constant/VALIDATOR.js";

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

  static isDivisibleBy1000(number) {
    return number % 1000 === 0;
  }
}

export default Validator;
