import convertType from '../utils/convertType.js';
import { GAME_RULE } from '../constants/gameRule.js';
import { ERROR_MESSAGE, MESSAGE } from '../constants/messages.js';

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

  /**
   * 사용자로부터 입력 받은 당첨 번호 유효성 검사
   * @param {string[]} winningNumbers
   * @return {Error | undefined}
   */
  static validateWinningNumbers(winningNumbers) {
    winningNumbers.map(Number).forEach((winningNumber) => {
      if (Number.isNaN(winningNumber)) {
        throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
      }

      if (
        winningNumber < GAME_RULE.START_LOTTO_NUMBER ||
        winningNumber > GAME_RULE.END_LOTTO_NUMBER
      ) {
        throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
      }
    });

    if (winningNumbers.length !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNT);
    }

    if (new Set(winningNumbers).size !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NOT_A_UNIQUE);
    }
  }

  /**
   * 사용자로부터 입력 받은 보너스 번호 유효성 검사
   * @param {string} - bonusNumber
   * @return {Error | undefined}
   */
  static validateBonusNumber(bonusNumber) {
    // 보너스 넘버가 숫자가 맞는지
    // 1개로 이루어져있는지
    // 빈 값이 아닌지
  }

  /**
   * 보너스 번호와 당첨 번호 유효성 검사
   * @param {string} - bonusNumber
   * @return {Error | undefined}
   */
  static validateLottoNumbers(bonusNumber, winningNumbers) {
    // 당첨 번호와 중복되는 번호가 없는지
  }
}

export default InputValidator;
