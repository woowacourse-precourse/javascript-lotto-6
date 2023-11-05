import { GAME_RULE } from '../constants/gameRule.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

class InputValidator {
  /**
   * @param {number} money
   * @return {Error | undefined}
   */
  static validateMoney(money) {
    if (Number.isNaN(Number(money))) {
      throw ERROR_MESSAGE.NOT_A_NUMBER;
    }

    if (money <= 0) {
      throw ERROR_MESSAGE.NEGATIVE_VALUE;
    }

    if (money % GAME_RULE.MIN_AMOUNT_UNIT !== 0) {
      throw ERROR_MESSAGE.NOT_BEING_DIVIDED;
    }

    if (money > GAME_RULE.MAX_AMOUNT_UNIT) {
      throw ERROR_MESSAGE.OVER_THE_LIMIT;
    }
  }

  /**
   * 사용자로부터 입력 받은 당첨 번호 유효성 검사
   * @param {string[] | number[]} winningNumbers
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
        throw ERROR_MESSAGE.OUT_OF_RANGE;
      }
    });

    if (winningNumbers.length !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw ERROR_MESSAGE.INVALID_COUNT;
    }

    if (new Set(winningNumbers).size !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw ERROR_MESSAGE.NOT_A_UNIQUE;
    }
  }

  /**
   * 사용자로부터 입력 받은 보너스 번호 유효성 검사
   * @param {string | number} - bonusNumber
   * @return {Error | undefined}
   */
  static validateBonusNumber(bonusNumber) {
    const convertedNumber = Number(bonusNumber);
    if (Number.isNaN(convertedNumber)) {
      throw ERROR_MESSAGE.NOT_A_NUMBER;
    }

    if (
      convertedNumber < GAME_RULE.START_LOTTO_NUMBER ||
      convertedNumber > GAME_RULE.END_LOTTO_NUMBER
    ) {
      throw ERROR_MESSAGE.OUT_OF_RANGE;
    }
  }

  /**
   * 보너스 번호와 당첨 번호 유효성 검사
   * @param {string | number} - bonusNumber
   * @param {string[] | number[]} - winningNumbers
   * @return {Error | undefined}
   */
  static validateLottoNumbers(bonusNumber, winningNumbers) {
    const lottoNumbers = new Set([bonusNumber, ...winningNumbers].map(Number));
    if (lottoNumbers.size !== GAME_RULE.TOTAL_LOTTO_COUNT) {
      throw ERROR_MESSAGE.NOT_A_UNIQUE;
    }
  }
}

export default InputValidator;
