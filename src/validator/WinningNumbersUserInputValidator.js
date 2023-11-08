import { LOTTO } from '../constants/lotto.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import paramType from '../lib/paramType/src/paramType.js';
import { WinningNumbersInputError } from '../errors/UserInputErrors.js';

export default class WinningNumbersUserInputValidator {
  constructor(winningNumbers, _ = paramType(winningNumbers, 'string')) {
    this.#validate(winningNumbers);
  }

  #validate(userInput) {
    const winningNumbers = userInput.split(',');
    this.#checkWinningNumbersCount(winningNumbers);
    this.#checkDuplicateNumbers(winningNumbers);
    this.#checkBetweenCommaNoneInput(winningNumbers);
    this.#checkAllNumbersAreNumberType(winningNumbers);
    this.#checkNegativeSign(winningNumbers);
    this.#checkStartNumberIsZero(winningNumbers);
    this.#checkDecimalNumber(winningNumbers);
    this.#checkExistOtherThanCommaAndNumberType(userInput);
    this.#checkOverRange(winningNumbers);
    this.#checkSpacing(userInput);
  }

  #checkWinningNumbersCount(winningNumbers) {
    if (winningNumbers.length !== LOTTO.NUMBER_COUNT) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.INVALID_WINNING_NUMBERS_COUNT,
      );
    }
  }

  #checkDuplicateNumbers(winningNumbers) {
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.HAVE_DUPLICATED_NUMBER,
      );
    }
  }

  #checkBetweenCommaNoneInput(winningNumbers) {
    if (winningNumbers.some((number) => number === '')) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.EXIST_BETWEEN_COMMA_EMPTY_STRING,
      );
    }
  }

  #checkAllNumbersAreNumberType(winningNumbers) {
    if (winningNumbers.some((number) => Number.isNaN(Number(number)))) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.HAVE_NOT_NUMBER_TYPE,
      );
    }
  }

  #checkNegativeSign(winningNumbers) {
    const minusSignRegExp = /^-.*/g;

    if (winningNumbers.some((number) => minusSignRegExp.test(number))) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.EXIST_NEGATIVE_SIGN,
      );
    }
  }
  #checkStartNumberIsZero(winningNumbers) {
    const startNumberIsZeroRegExp = /^0.*/g;

    if (winningNumbers.some((number) => startNumberIsZeroRegExp.test(number))) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.HAVE_START_NUMBER_ZERO,
      );
    }
  }

  #checkDecimalNumber(winningNumbers) {
    if (winningNumbers.some((number) => !Number.isInteger(Number(number)))) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.HAVE_NOT_INTEGER_NUMBER,
      );
    }
  }

  #checkExistOtherThanCommaAndNumberType(userInput) {
    const notNumberTypeAndCommaRegExp = /[^0-9|,]/g;

    if (notNumberTypeAndCommaRegExp.test(userInput)) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.HAVE_INVALID_INPUT_WITHOUT_NUMBER_AND_COMMA,
      );
    }
  }

  #checkOverRange(winningNumbers) {
    if (
      !winningNumbers.every(
        (number) =>
          number >= LOTTO.NUMBER_RANGE.MIN && number <= LOTTO.NUMBER_RANGE.MAX,
      )
    ) {
      throw new WinningNumbersInputError(
        ERROR_MESSAGE.USER_INPUT.EXIST_OVER_RANGE_NUMBER,
      );
    }
  }

  #checkSpacing(userInput) {
    const spacingRegExp = /\s/g;

    if (spacingRegExp.test(userInput)) {
      throw new WinningNumbersInputError(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING);
    }
  }
}
