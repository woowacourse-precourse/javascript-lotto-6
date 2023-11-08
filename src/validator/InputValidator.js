import { GAME_RULE } from '../constants/gameRule.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

class InputValidator {
  /**
   * 사용자가 투입한 금액 유효성 검사
   * @param {number} money
   * @throws {Error}
   */
  static validateMoney(money) {
    this.checkNumber(money);
    this.checkPositiveValue(money);
    this.checkDivisionByUnit(money);
    this.checkMaxAmountLimit(money);
  }

  /**
   * 사용자로부터 입력 받은 당첨 번호 유효성 검사
   * @param {string[] | number[]} winningNumbers
   * @throws {Error}
   */
  static validateWinningNumbers(winningNumbers) {
    winningNumbers.map(Number).forEach((winningNumber) => {
      this.checkNumber(winningNumber);
      this.checkLottoNumberRange(winningNumber);
    });
    this.checkCorrectLottoNumberCount(winningNumbers);
    this.checkUniqueLottoNumbers(winningNumbers);
  }

  /**
   * 사용자로부터 입력 받은 보너스 번호 유효성 검사
   * @param {string | number} - bonusNumber
   * @throws {Error}
   */
  static validateBonusNumber(bonusNumber) {
    const convertedNumber = Number(bonusNumber);
    this.checkNumber(convertedNumber);
    this.checkLottoNumberRange(bonusNumber);
  }

  /**
   * 보너스 번호와 당첨 번호 유효성 검사
   * @param {string | number} - bonusNumber
   * @param {string[] | number[]} - winningNumbers
   * @throws {Error}
   */
  static validateLottoNumbers(bonusNumber, winningNumbers) {
    const lottoNumbers = new Set([bonusNumber, ...winningNumbers].map(Number));
    if (lottoNumbers.size !== GAME_RULE.TOTAL_LOTTO_COUNT) {
      throw ERROR_MESSAGE.NOT_A_UNIQUE;
    }
  }

  static checkNumber(value) {
    if (Number.isNaN(Number(value))) {
      throw ERROR_MESSAGE.NOT_A_NUMBER;
    }
  }

  static checkPositiveValue(value) {
    if (value <= 0) {
      throw ERROR_MESSAGE.NEGATIVE_VALUE;
    }
  }

  static checkDivisionByUnit(value) {
    if (value % GAME_RULE.MIN_AMOUNT_UNIT !== 0) {
      throw ERROR_MESSAGE.NOT_BEING_DIVIDED;
    }
  }

  static checkMaxAmountLimit(value) {
    if (value > GAME_RULE.MAX_AMOUNT_UNIT) {
      throw ERROR_MESSAGE.OVER_THE_LIMIT;
    }
  }

  static checkLottoNumberRange(lottoNumber) {
    if (
      lottoNumber < GAME_RULE.START_LOTTO_NUMBER ||
      lottoNumber > GAME_RULE.END_LOTTO_NUMBER
    ) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static checkCorrectLottoNumberCount(lottoNumbers) {
    if (lottoNumbers.length !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_COUNT);
    }
  }

  static checkUniqueLottoNumbers(numbersArray) {
    if (new Set(numbersArray).size !== GAME_RULE.LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.NOT_A_UNIQUE);
    }
  }
}

export default InputValidator;
