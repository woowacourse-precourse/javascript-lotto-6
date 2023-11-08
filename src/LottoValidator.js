import { LOTTO_GAME, ERROR_MESSAGES } from './utils/constants.js';

class LottoValidator {
  static validateIsNaN(input, errorMessage) {
    if (isNaN(input)) {
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
}
export default LottoValidator;
