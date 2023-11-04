import convertType from '../utils/convertType.js';
import { GAME_RULE } from '../constants/gameRule.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

class InputValidator {
  /**
   * @param {number} money
   * @return {Error | undefined}
   */
  static validateMoney(money) {
    if (Number.isNaN(convertType(money))) {
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    }

    if (money <= 0) {
      throw new Error(ERROR_MESSAGE.NEGATIVE_VALUE);
    }

    if (money % GAME_RULE.MIN_AMOUNT_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.NOT_BEING_DIVIDED);
    }

    if (money > GAME_RULE.MAX_AMOUNT_UNIT) {
      throw new Error(ERROR_MESSAGE.OVER_THE_LIMIT);
    }
  }
}

export default InputValidator;
