import Is from './Is.js';

import CONSTANTS from '../../../constants/CONSTANTS.js';

const {
  NOT_AN_INTEGER_ERROR_MESSAGE,
  NOT_MULTIPLES_ERROR_MESSAGE,
  SAME_ELEMENT_IN_ARRAY_ERROR_MESSAGE,
  EXIST_NUMBER_IN_BOARD_ERROR_MESSAGE,
  WRONG_LENGTH_ERROR_MESSAGE,
  WRONG_RANGE_NUMBER_ERROR_MESSAGE,
  NUMBER_OF_LOTTO_NUMBERS,
  LOTTO_NUMBER_LOWER,
  LOTTO_NUMBER_UPPER,
} = CONSTANTS;

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

  static bonusNumberString(string, winningNumbers) {
    ErrorCheck.lottoNumberString(string);
    ErrorCheck.differeNumberInWinningNumbers(Number(string), winningNumbers);
  }

  static lottoNumberString(string) {
    ErrorCheck.positiveIntegerString(string);
    ErrorCheck.numberInRange(
      Number(string),
      LOTTO_NUMBER_LOWER,
      LOTTO_NUMBER_UPPER
    );
  }

  static differeNumberInWinningNumbers(lottoNumber, winningNumbers) {
    if (winningNumbers.includes(lottoNumber))
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
