import PurchaseAmountValidation from "./PurchaseAmountValidation.js";
import WinningNumbersValidation from "./WinningNumbersValidation.js";
import BonusNumberValidation from "./BonusNumberValidation.js";
import LottoNumbersValidation from "./LottoNumbersValidation.js";

/** 로또 게임에서 사용되는 사용자 입력(문자열)에 대하여 유효성 검사를 수행 */
const LottoGameValidator = {

  /**
   * 구입금액(UserInput)에 대하여 유효성검사를 수행한다.
   * @param {string} value 구입금액(UserInput)
   */
  validatePurchaseAmount(value) {
    PurchaseAmountValidation.validate(value);
  },

  /** 
   * 당첨번호(UserInput)에 대하여 유효성검사를 수행한다.
   * @param {Array<string>} value 당첨번호(UserInput) 배열
   */
  validateWinningNumbers(value) {
    WinningNumbersValidation.validate(value);
  },

  /** 
   * 보너스번호(UserInput)에 대하여 유효성검사를 수행한다.
   * @param {string} value 보너스번호(UserInput)
   * @param {Array<number>} winningNumbers 당첨번호 배열
   */
  validateBonusNumber(value, winningNumbers) {
    BonusNumberValidation.validate(value, winningNumbers);
  },

  /**
   * 로또번호(Lotto.numbers)에 대하여 유효성검사를 수행한다.
   * @param {Array<number>} value 로또번호(Lotto.numbers)
   */
  validateLottoNumbers(value) {
    LottoNumbersValidation.validate(value);
  }
}

export default LottoGameValidator;
