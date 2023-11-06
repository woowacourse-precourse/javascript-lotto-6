import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../constants/Message";
import PurchasePriceValidator from "../validate/PurchasePriceValidator";
import WinningNumbersValidator from "../validate/WinningNumbersValidator";
import BonusNumberValidator from "../validate/BonusNumberValidator";

export default class InputView {
  static async getPurchasePrice() {
    try {
      Console.print(GUIDE_MESSAGE.insertMoney);
      const purchasePrice = await Console.readLineAsync("");
      PurchasePriceValidator.validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      if (error.message.startsWith('[ERROR]')) {
        Console.print(error.message); 
        return this.getPurchasePrice(); 
      } else {
        throw error;  
      }
    }
  }

  static async getWinningNumbers() {
    Console.print(GUIDE_MESSAGE.insertWinningNumbers);
    const winningNumbers = await Console.readLineAsync("");
    const numbersArray = winningNumbers.split(',').map(num => parseInt(num.trim()));
    WinningNumbersValidator.validateWinningNumbers(numbersArray);
    return numbersArray;
  }

  static async getBonusNumber(winningNumbers) {
    Console.print(GUIDE_MESSAGE.insertBonusNumber);
    const bonusNumber = await Console.readLineAsync("");
    BonusNumberValidator.validateBonusNumber(bonusNumber, winningNumbers);
    return parseInt(bonusNumber, 10);
  }
}