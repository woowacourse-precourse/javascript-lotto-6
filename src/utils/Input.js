import { Console } from "@woowacourse/mission-utils";
import Parser from "./Parser.js";
import Validator from "./Validator.js";
import INPUT_MESSAGE from "../constant/InputMessage.js";

const Input = {
  async getPurchaseAmount() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
      const purchaseAmount = Parser.valueToNumber(input);
      Validator.purchaseAmount(purchaseAmount);
      return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
      return await this.getPurchaseAmount();
    }
  },

  async getWinningNumbers() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
      const winningNumbers = Parser.commaSeparatedValuesToNumbers(input);
      Validator.winningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      Console.print(error.message);
      return await this.getWinningNumbers();
    }
  },

  async getBonusNumber(winningNumbers) {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
      const bonusNumber = Parser.valueToNumber(input);
      Validator.bonusNumber(winningNumbers, bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      return await this.getBonusNumber(winningNumbers);
    }
  },
};

export default Input;
