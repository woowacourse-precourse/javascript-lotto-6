import InputValidationService from '../service/InputValidationService.js';
import { INPUT_QUERY } from '../util/constant/index.js';
class InputView {
  static async readPurchaseMoney() {
    return await InputValidationService.setPurchaseMoney(
      INPUT_QUERY.PURCHASE_MONEY,
    );
  }
  static async readWinningNumber() {
    return await InputValidationService.setWinningNumber(
      INPUT_QUERY.WINNING_NUMBER,
    );
  }
  static async readBonusNumber(winningNumber) {
    return await InputValidationService.setBonusNumber(
      INPUT_QUERY.BONUS_NUMBER,
      winningNumber,
    );
  }
}

export default InputView;
