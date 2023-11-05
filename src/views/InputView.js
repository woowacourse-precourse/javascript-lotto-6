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

  static async getTargetNumbers() {
    Console.print("당첨 번호를 입력해 주세요.");
    const targetNumbers = await Console.readLineAsync("");
    return targetNumbers.split(',').map(num => parseInt(num.trim()));
  }
}