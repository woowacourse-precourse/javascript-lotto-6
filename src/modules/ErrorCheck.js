const NOT_A_NUMBER_ERROR_MESSAGE = '[ERROR] 숫자가 아닙니다.';

class ErrorCheck {
  static purchasePrice(inputString) {}
  static stringToNumber(inputString) {
    if (Number.isNaN(Number(inputString)))
      throw new Error(NOT_A_NUMBER_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
