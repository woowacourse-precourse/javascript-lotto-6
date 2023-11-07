import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages";

export default class InputView {
  async getPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT);
  }

  async getWinningNumber() {
    return await Console.readLineAsync(MESSAGES.WINNIG_NUMBER);
  }

  async getBonusNumber() {
    return await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
  }
}
