import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages";

export default class InputView {
  async getPurchaseAmount() {
    return await Console.readLineAsync(MESSAGES.PURCHASE_AMOUNT);
  }

  getPurchaseResult(purchaseCount, lottoArray) {
    Console.print(MESSAGES.PURCHASE_RESULT(purchaseCount));
    lottoArray.forEach((lottoNumber) => Console.print(lottoNumber));
    Console.print("");
  }
}
