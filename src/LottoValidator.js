import { LOTTO_GAME, ERROR_MESSAGES } from './utils/constants.js';

class LottoValidator {
  static validateIsNaN(input, errorMessage) {
    if (isNaN(input)) {
      LottoValidator.throwError(errorMessage);
    }
  }

  static validateLottoNumber(number, errorMessage) {
    if (
      isNaN(number) ||
      number < LOTTO_GAME.MIN_NUMBER ||
      number > LOTTO_GAME.MAX_NUMBER ||
      !Number.isInteger(number)
    ) {
      LottoValidator.throwError(errorMessage);
    }
  }

  static throwError(message) {
    throw new Error(`${ERROR_MESSAGES.PREFIX} ${message}`);
  }

  static validateAmount(userInput) {
    LottoValidator.validateIsNaN(userInput, ERROR_MESSAGES.INVALID_AMOUNT_TYPE);

    if (userInput <= 0 || userInput % LOTTO_GAME.PRICE_UNIT !== 0) {
      LottoValidator.throwError(ERROR_MESSAGES.INVALID_AMOUNT_RANGE);
    }
  }

  static validateNumbers(numbers) {
    if (numbers.length !== LOTTO_GAME.TOTAL_NUMBERS) {
      LottoValidator.throwError(ERROR_MESSAGES.INVALID_NUMBER_COUNT);
    }

    numbers.some((number) =>
      LottoValidator.validateLottoNumber(
        number,
        ERROR_MESSAGES.INVALID_NUMBER_RANGE
      )
    );

    if (new Set(numbers).size !== LOTTO_GAME.TOTAL_NUMBERS) {
      LottoValidator.throwError(ERROR_MESSAGES.DUPLICATE_NUMBERS);
    }
  }

  static validateBonusNumber(numbers, number) {
    LottoValidator.validateIsNaN(
      number,
      ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE
    );

    LottoValidator.validateLottoNumber(
      number,
      ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE
    );

    const unique = new Set(numbers);
    if (unique.has(String(number))) {
      LottoValidator.throwError(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
    }
  }
}
export default LottoValidator;
