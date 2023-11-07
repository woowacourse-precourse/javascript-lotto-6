import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages";

export default class InputView {
  async getPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT);
  }

  printPurchaseResult(purchaseCount, lottoArray) {
    Console.print(MESSAGES.PURCHASE_RESULT(purchaseCount));
    lottoArray.forEach((lottoNumber) => Console.print(lottoNumber));
    Console.print("");
  }

  async getWinningNumber() {
    return await Console.readLineAsync(MESSAGES.WINNIG_NUMBER);
  }

  async getBonusNumber() {
    return await Console.readLineAsync(MESSAGES.BONUS_NUMBER);
  }
}
