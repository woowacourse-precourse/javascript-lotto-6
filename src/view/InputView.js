import { Console } from "@woowacourse/mission-utils";
import Calculator from "../utils/calc/Calculator.js";
import { MESSAGE_ASK } from "../static/Static.js";
import InputValidator from "../utils/validator/InputValidator.js";
import OutputView from "./OutputView.js";

const InputView = {
  async readPurchasePrice() {
    while (true) {
      try {
        const purchasePrice = await Console.readLineAsync(
          MESSAGE_ASK.purchasePrice
        );
        InputValidator.validateEmptyString(purchasePrice);
        InputValidator.validatePurchasePrice(purchasePrice);
        const purchaseQuantity = Calculator.calcPurchaseQuantity(purchasePrice);
        return purchaseQuantity;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  },

  async readWinningNums() {
    OutputView.printBlankLine();
    while (true) {
      try {
        const winningNums = await Console.readLineAsync(
          MESSAGE_ASK.winningNums
        );
        InputValidator.validateEmptyString(winningNums);
        const winningNumArr = InputValidator.validateWinningNums(winningNums);
        return winningNumArr;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  },

  async readBonusNum(winningNums) {
    OutputView.printBlankLine();
    while (true) {
      try {
        const bonusNum = await Console.readLineAsync(MESSAGE_ASK.bonusNum);
        InputValidator.validateEmptyString(bonusNum);
        InputValidator.validateBonusNum(bonusNum, winningNums);
        return bonusNum;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  },
};

export default InputView;
