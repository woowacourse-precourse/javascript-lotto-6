import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
import PurchasePriceValidator from "../validate/PurchasePriceValidator";

export default class InputView {
  static async getPurchasePrice() {
    Console.print(GUIDE_MESSAGE.insertMoney);
    const purchasePrice = await Console.readLineAsync("");
    PurchasePriceValidator.validatePurchasePrice(purchasePrice);
    return purchasePrice;
  }
}