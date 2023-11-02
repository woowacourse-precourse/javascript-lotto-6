import Is from './Is.js';
const NOT_AN_INTEGER_ERROR_MESSAGE = '[ERROR] 정수가 아닙니다.';

class ErrorCheck {
  static purchasePrice(inputString) {}
  static integerString(inputString) {
    if (!Is.positiveIntegerString(inputString))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
