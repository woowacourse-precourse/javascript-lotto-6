import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants/messages.js";

export default class OutputView {
  printPurchaseResult(purchaseCount, lottoArray) {
    Console.print(MESSAGES.PURCHASE_RESULT(purchaseCount));
    lottoArray.forEach((lottoNumber) => Console.print(lottoNumber));
    Console.print("");
  }
}
