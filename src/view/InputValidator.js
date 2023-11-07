import {ERROR} from "../constants/constants.js";

export class InputValidator {
  /**
   * @param {string} input
   * @return {void}
   * @description - [사용자가 입력한 구입 금액 검증]
   */
  validateMoneyInput(input) {
    //숫자가 아닌 경우
    if (isNaN(Number(input))) {
      throw new Error(ERROR.MONEY_NUMBER_ONLY_ERROR);
    }
  }

  /**
   *
   * @param {string} input
   * @return {void}
   * @description - [사용자가 입력한 당첨 번호 검증]
   */
  validateWinningNumberInput(input) {
    // null값이거나 빈칸이 들어간 경우
    if (input == null || input.includes(" ")) {
      throw new Error(ERROR.BLANK_ERROR);
    }
  }

  /**
   *
   * @param {string} input
   * @return {void}
   * @description - [사용자가 입력한 보너스 번호 검증]
   */
  validateBonusNumberInput(input) {
    //숫자가 아닌 경우
    if (isNaN(Number(input))) {
      throw new Error(ERROR.MONEY_NUMBER_ONLY_ERROR);
    }
    // 1~45 사이의 숫자가 아닌 경우
    if (input < 1 || input > 45) {
      throw new Error()
    }
  }
}
