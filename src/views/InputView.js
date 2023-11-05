import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
import PurchasePriceValidator from "../validate/PurchasePriceValidator";
import WinningNumbersValidator from "../validate/WinningNumbersValidator";

export default class InputView {
  static async getPurchasePrice() {
    Console.print(GUIDE_MESSAGE.insertMoney);
    const purchasePrice = await Console.readLineAsync("");
    PurchasePriceValidator.validatePurchasePrice(purchasePrice);
    return purchasePrice;
  }

  static async getWinningNumbers() {
    Console.print(GUIDE_MESSAGE.insertWinningNumbers);
    const WinningNumbers = await Console.readLineAsync("");
    const numbersArray = WinningNumbers.split(',').map(num => parseInt(num.trim()));
    WinningNumbersValidator.validateWinningNumbers(numbersArray);
    return numbersArray;
  }

  static async getBonusNumber() {
    Console.print(GUIDE_MESSAGE.insertBonusNumber);
    const bonusNumber = await Console.readLineAsync("");
  }
}