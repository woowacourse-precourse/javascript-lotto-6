import Is from './Is.js';
const NUMBER_OF_LOTTO_NUMBERS = 6;
const LOTTO_NUMBER_LOWER = 1;
const LOTTO_NUMBER_UPPER = 45;

const NOT_AN_INTEGER_ERROR_MESSAGE = '[ERROR] 정수가 아닙니다.';
const NOT_MULTIPLES_ERROR_MESSAGE = '[ERROR] 로또를 깔끔하게 살 수 없습니다.';
const WRONG_LENGTH_ERROR_MESSAGE = '[ERROR] 잘못된 길이입니다';

class ErrorCheck {
  static purchasePrice(inputString, lottoPrice) {
    ErrorCheck.positiveIntegerString(inputString);
    ErrorCheck.multiplesInPositive(Number(inputString), lottoPrice);
  }

  static lottoListString(inputString) {
    const arrayFromString = inputString.split(',');
    ErrorCheck.arrayLikeLength(arrayFromString, NUMBER_OF_LOTTO_NUMBERS);
    arrayFromString.forEach(splitedString =>
      ErrorCheck.positiveIntegerString(splitedString)
    );
  }

  static positiveIntegerString(inputString) {
    if (!Is.positiveIntegerString(inputString))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
  }

  static multiplesInPositive(inputNumber, targetNumber) {
    if (!Is.multiplesInPositive(inputNumber, targetNumber))
      throw new Error(NOT_MULTIPLES_ERROR_MESSAGE);
  }

  static arrayLikeLength(arrayLike, length) {
    if (arrayLike.length !== length)
      throw new Error(WRONG_LENGTH_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
