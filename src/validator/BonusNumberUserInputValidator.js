import { LOTTO } from '../constants/lotto.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import paramType from '../lib/paramType/src/paramType.js';
import { BonusNumberInputError } from '../errors/UserInputErrors.js';

export default class BonusNumberUserInputValidator {
  #winningNumbers;

  constructor(
    bonusNumber,
    winningNumbers,
    _0 = paramType(bonusNumber, 'string'),
    _1 = paramType(winningNumbers, 'string'),
  ) {
    this.#winningNumbers = winningNumbers.split(',');
    this.#validate(bonusNumber);
  }

  #validate(userInput) {
    this.#checkSpacing(userInput);
    this.#checkNegativeSign(userInput);
    this.#checkOverRange(userInput);
    this.#checkIncludeWinningNumbers(userInput);
    this.#checkStartNumberIsZero(userInput);
    this.#checkDecimalNumber(userInput);
    this.#checkNonNumberTypeInput(userInput);
  }

  #checkSpacing(userInput) {
    const spacingRegExp = /\s/g;

    if (spacingRegExp.test(userInput)) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_SPACING,
      );
    }
  }

  #checkNegativeSign(userInput) {
    const minusSignRegExp = /^-.*/g;

    if (minusSignRegExp.test(userInput)) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.EXIST_NEGATIVE_SIGN,
      );
    }
  }

  #checkOverRange(userInput) {
    const bonusNumber = Number(userInput);

    if (
      !(
        bonusNumber >= LOTTO.NUMBER_RANGE.MIN &&
        bonusNumber <= LOTTO.NUMBER_RANGE.MAX
      )
    ) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.EXIST_OVER_RANGE,
      );
    }
  }

  #checkIncludeWinningNumbers(userInput) {
    if (this.#winningNumbers.includes(userInput)) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.DUPLICATED_WINNING_NUMBERS,
      );
    }
  }

  #checkStartNumberIsZero(userInput) {
    const startNumberIsZeroRegExp = /^0.*/g;

    if (startNumberIsZeroRegExp.test(userInput)) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_START_NUMBER_ZERO,
      );
    }
  }

  #checkDecimalNumber(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_DECIMAL_NUMBER,
      );
    }
  }

  #checkNonNumberTypeInput(userInput) {
    const notNumberTypeRegExp = /[^\d]/g;

    if (notNumberTypeRegExp.test(userInput)) {
      throw new BonusNumberInputError(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_INVALID_INPUT_WITHOUT_NUMBER_TYPE,
      );
    }
  }
}
