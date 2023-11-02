const NOT_AN_INTEGER_ERROR_MESSAGE = '[ERROR] 정수가 아닙니다.';

class ErrorCheck {
  static purchasePrice(inputString) {}
  static integerString(inputString) {
    if (Number.isNaN(Number(inputString)))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
    if (Number(inputString) !== parseInt(inputString))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
