import InputService from '../service/InputService.js';
import { INPUT_QUERY } from '../util/constant/index.js';
class InputView {
  constructor() {}

  static async readPurchaseMoney() {
    return await InputService.setPurchaseMoney(INPUT_QUERY.PURCHASE_MONEY);
  }
  static async readWinningNumber() {
    return await InputService.setWinningNumber(INPUT_QUERY.WINNING_NUMBER);
  }
  static async readBonusNumber(winningNumber) {
    return await InputService.setBonusNumber(
      INPUT_QUERY.BONUS_NUMBER,
      winningNumber
    );
  }
}

export default InputView;
