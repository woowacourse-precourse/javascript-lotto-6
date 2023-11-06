export class InputValidator {
  /**
   * @param {string} input
   * @return {void}
   * @description - [사용자가 입력한 구입 금액 검증]
   */
  validateMoneyInput(input) {
    //숫자가 아닌 경우
    if (isNaN(Number(input))) {
      throw new Error("[ERROR] 구입 금액은 숫자만 가능합니다.");
    }
  }

  /**
   *
   * @param {string} input
   * @return {void}
   * @description - [사용자가 입력한 당첨 번호 검증]
   */
  validateWinningNumberInput(input) {
    // 공백이 포함 된 경우
    //
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
      throw new Error("[ERROR] 구입 금액은 숫자만 가능합니다.");
    }
  }
}
