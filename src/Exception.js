import { MESSAGES } from "./Constants.js";

class Exception {

  // 구입 금액 입력 예외처리
  validateBuyLotto(input) {
    if (isNaN(input)) {
      throw new Error(MESSAGES.ERROR_IS_NOT_NUMBER);
    }

    if ((input % 1000 !== 0)) {
      throw new Error(MESSAGES.ERROR_IS_NOT_UNIT_OF_THOUSAND_WON);
    }

    if (!input) {
      throw new Error(MESSAGES.ERROR_NOT_INPUT_MONEY);
    }

    return input;
  }

  // 보너스 번호 입력 예외처리
  validBonusInput(winningNum, input) {
    if (winningNum.includes(Number(input))) {
      throw new Error(MESSAGES.ERROR_DUPLICATED_NUM);
    }

    if (isNaN(input)) {
      throw new Error(MESSAGES.ERROR_IS_NOT_NUMBER);
    }

    if (!input) {
      throw new Error(MESSAGES.ERROR_NOT_INPUT_BONUS);
    }

    return input;
  }
}

export default Exception;