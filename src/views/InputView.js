import { Console } from "@woowacourse/mission-utils";
import PurchasePriceValidator from "../validate/PurchasePriceValidator";
import WinningNumbersValidator from "../validate/WinningNumbersValidator";
import BonusNumberValidator from "../validate/BonusNumberValidator";
import OutputView from "./OutputView";

const InputView = {
  async getPurchasePrice() {
    try {
      const purchasePrice = await Console.readLineAsync("");
      PurchasePriceValidator.validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      OutputView.printError(error);
      return this.getPurchasePrice();
    }
  },

  async getWinningNumbers() {
    try {
      const winningNumbers = await Console.readLineAsync("");
      const numbersArray = winningNumbers
        .split(",")
        .map((num) => parseInt(num.trim()));
      WinningNumbersValidator.validateWinningNumbers(numbersArray);
      return numbersArray;
    } catch (error) {
      OutputView.printError(error);
      return this.getWinningNumbers();
    }
  },

  async getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await Console.readLineAsync("");
      BonusNumberValidator.validateBonusNumber(bonusNumber, winningNumbers);
      return parseInt(bonusNumber, 10);
    } catch (error) {
      OutputView.printError(error);
      return this.getBonusNumber(winningNumbers);
    }
  },
};

export default InputView;
