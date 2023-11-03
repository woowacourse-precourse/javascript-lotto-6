import VALIDATOR from "./constant/VALIDATOR.js";

class Validator {
  static checkArrayLength(array, number) {
    return array.length === number;
  }

  static checkArrayForDuplicate(array) {
    return new Set(array).size !== array.length;
  }

  static isStringOnlyDigits(string) {
    return VALIDATOR.DIGITS_REGEX.test(string);
  }
}

export default Validator;
