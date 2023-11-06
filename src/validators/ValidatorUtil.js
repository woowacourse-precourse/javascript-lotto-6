import { ErrorMessages } from '../constants/Messages.js';

class ValidatorUtil {
  static isNumberValidate(input) {
    if (!Number.isInteger(input)) throw new Error(ErrorMessages.NOT_NUMBER);
  }

  static isPositiveNumberValidate(input) {
    if (input <= 0) throw new Error(ErrorMessages.NOT_POSITIVE_NUMBER);
  }

  static isMultiplesOf1000Validate(input) {
    if (input % 1000 != 0) throw new Error(ErrorMessages.NOT_MULTIPLES_OF_1000);
  }

  static isNumberInRangeValidate(input) {
    if (input < 1 || input > 45)
      throw new Error(ErrorMessages.NOT_NUMBER_IN_RANGE);
  }

  static lengthValidate(input) {
    if (input.length !== 6) throw new Error(ErrorMessages.NOT_LENGTH_6);
  }
}

export default ValidatorUtil;
