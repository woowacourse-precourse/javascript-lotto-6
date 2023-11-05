import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
import WinningNumbersValidator from "../validate/WinningNumbersValidator";

export default class InputView {
  static async getPurchasePrice() {
    Console.print(GUIDE_MESSAGE.insertMoney);
    const purchasePrice = await Console.readLineAsync("");
    WinningNumbersValidator.validatePurchasePrice(purchasePrice);
    return purchasePrice;
  }
}