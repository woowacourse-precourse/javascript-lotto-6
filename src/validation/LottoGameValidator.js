import PurchaseAmountValidation from "./PurchaseAmountValidation.js";
import WinningNumbersValidation from "./WinningNumbersValidation.js";
import BonusNumberValidation from "./BonusNumberValidation.js";

/** 로또 게임에서 사용되는 사용자 입력(문자열)에 대하여 유효성 검사를 수행 */
const LottoGameValidator = {

  /** 구입 금액에 대하여 유효성검사를 수행한다. */
  validatePurchaseAmount(value) {
    PurchaseAmountValidation.validate(value);
  },

  /** 당첨 번호에 대하여 유효성검사를 수행한다. */
  validateWinningNumbers(value) {
    WinningNumbersValidation.validate(value);
  },

  /** 보너스 번호에 대하여 유효성검사를 수행한다. */
  validateBonusNumber(value, winningNumbers) {
    BonusNumberValidation.validate(value, winningNumbers);
  }
}

export default LottoGameValidator;
