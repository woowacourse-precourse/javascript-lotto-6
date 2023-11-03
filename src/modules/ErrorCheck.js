import Is from './Is.js';
const NUMBER_OF_LOTTO_NUMBERS = 6;
const LOTTO_NUMBER_LOWER = 1;
const LOTTO_NUMBER_UPPER = 45;

const MISS_STATE = 0;
const BONUS_STATE = 0.5;
const HIT_STATE = 1;

const NOT_AN_INTEGER_ERROR_MESSAGE = '[ERROR] 정수가 아닙니다.';
const NOT_MULTIPLES_ERROR_MESSAGE = '[ERROR] 로또를 깔끔하게 살 수 없습니다.';
const WRONG_LENGTH_ERROR_MESSAGE = '[ERROR] 잘못된 길이입니다.';
const WRONG_RANGE_NUMBER_ERROR_MESSAGE = '[ERROR] 범위 바깥의 숫자입니다.';
const SAME_ELEMENT_IN_ARRAY_ERROR_MESSAGE = '[ERROR] 중복된 요소가 존재합니다.';
const EXIST_NUMBER_IN_BOARD_ERROR_MESSAGE = '[ERROR] 중복된 번호가 존재합니다.';

class ErrorCheck {
  static purchasePrice(inputString, lottoPrice) {
    ErrorCheck.positiveIntegerString(inputString);
    ErrorCheck.multiplesInPositive(Number(inputString), lottoPrice);
  }

  static lottoNumbersString(string) {
    const arrayFromString = string.split(',');
    ErrorCheck.arrayLikeLength(arrayFromString, NUMBER_OF_LOTTO_NUMBERS);
    arrayFromString.forEach(ErrorCheck.lottoNumberString);
    ErrorCheck.differentElementArray(arrayFromString);
  }

  static bonusNumberString(string, lottoBoard) {
    ErrorCheck.lottoNumberString(string);
    ErrorCheck.differeNumberInLottoBoard(Number(string), lottoBoard);
  }

  static lottoNumberString(string) {
    ErrorCheck.positiveIntegerString(string);
    ErrorCheck.numberInRange(
      Number(string),
      LOTTO_NUMBER_LOWER,
      LOTTO_NUMBER_UPPER
    );
  }

  static differeNumberInLottoBoard(lottoNumber, lottoBoard) {
    if (lottoBoard[lottoNumber] !== MISS_STATE)
      throw new Error(EXIST_NUMBER_IN_BOARD_ERROR_MESSAGE);
  }

  static positiveIntegerString(string) {
    if (!Is.positiveIntegerString(string))
      throw new Error(NOT_AN_INTEGER_ERROR_MESSAGE);
  }

  static multiplesInPositive(multiplier, multiplicand) {
    if (!Is.multiplesInPositive(multiplier, multiplicand))
      throw new Error(NOT_MULTIPLES_ERROR_MESSAGE);
  }

  static arrayLikeLength(arrayLike, length) {
    if (arrayLike.length !== length)
      throw new Error(WRONG_LENGTH_ERROR_MESSAGE);
  }

  static numberInRange(number, lower, upper) {
    if (number < lower) throw new Error(WRONG_RANGE_NUMBER_ERROR_MESSAGE);
    if (upper < number) throw new Error(WRONG_RANGE_NUMBER_ERROR_MESSAGE);
  }

  static differentElementArray(array) {
    if (array.length !== new Set(array).size)
      throw new Error(SAME_ELEMENT_IN_ARRAY_ERROR_MESSAGE);
  }
}

export default ErrorCheck;
