import Is from './Is.js';
const NOT_AN_INTEGER_ERROR_MESSAGE = '[ERROR] 정수가 아닙니다.';
const NOT_MULTIPLES_OF_THOUSANDS_ERROR_MESSAGE =
  '[ERROR] 1000의 배수가 아닙니다.';

class ErrorCheck {
  static purchasePrice(inputString) {}
  static positiveIntegerString(inputString) {
    if (!Is.positiveIntegerString(inputString))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
  }
  static multiplesOf1000(inputNumber) {
    if (!Is.multiplesOf1000(inputNumber))
      throw new Error(NOT_MULTIPLES_OF_THOUSANDS_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
