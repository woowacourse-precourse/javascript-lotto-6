import { Console } from "@woowacourse/mission-utils";
import PurchasePriceValidator from "../validate/PurchasePriceValidator";
import WinningNumbersValidator from "../validate/WinningNumbersValidator";
import BonusNumberValidator from "../validate/BonusNumberValidator";
import OutputView from "./OutputView";

export default class InputView {
  static async getPurchasePrice() {
    try {
      const purchasePrice = await Console.readLineAsync("");
      PurchasePriceValidator.validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      OutputView.printError(error);
      return this.getPurchasePrice(); 
    }
  }

  static async getWinningNumbers() {
    const winningNumbers = await Console.readLineAsync("");
    const numbersArray = winningNumbers.split(',').map(num => parseInt(num.trim()));
    WinningNumbersValidator.validateWinningNumbers(numbersArray);
    return numbersArray;
  }

  static async getBonusNumber(winningNumbers) {
    const bonusNumber = await Console.readLineAsync("");
    BonusNumberValidator.validateBonusNumber(bonusNumber, winningNumbers);
    return parseInt(bonusNumber, 10);
  }
}