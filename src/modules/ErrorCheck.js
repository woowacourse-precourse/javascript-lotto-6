import Is from './Is.js';
const NOT_AN_INTEGER_ERROR_MESSAGE = '[ERROR] 정수가 아닙니다.';
const NOT_MULTIPLES_ERROR_MESSAGE = '[ERROR] 로또를 깔끔하게 살 수 없습니다.';
const WRONG_LENGTH_ERROR_MESSAGE = '[ERROR] 잘못된 길이입니다';

class ErrorCheck {
  static purchasePrice(inputString, lottoPrice) {
    ErrorCheck.positiveIntegerString(inputString);
    ErrorCheck.multiplesInPositive(Number(inputString), lottoPrice);
  }

  static positiveIntegerString(inputString) {
    if (!Is.positiveIntegerString(inputString))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
  }

  static multiplesInPositive(inputNumber, targetNumber) {
    if (!Is.multiplesInPositive(inputNumber, targetNumber))
      throw new Error(NOT_MULTIPLES_ERROR_MESSAGE);
  }

  static lottoListString(inputString) {}

  static arrayLikeLength(arrayLike, length) {
    if (arrayLike.length !== length)
      throw new Error(WRONG_LENGTH_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
