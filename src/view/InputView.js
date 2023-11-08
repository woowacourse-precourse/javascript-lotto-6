import { Console } from "@woowacourse/mission-utils";
import Calculator from "../utils/calc/Calculator.js";
import { MESSAGE_ASK } from "../static/Static.js";
import Validator from "../utils/validator/Validator.js";
import OutputView from "./OutputView.js";

const InputView = {
  async readPurchasePrice() {
    while (true) {
      try {
        const purchasePrice = await Console.readLineAsync(
          MESSAGE_ASK.purchasePrice
        );
        Validator.validatePurchasePrice(purchasePrice);
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
        const winningNumArr = Validator.validateWinningNums(winningNums);
        return winningNumArr;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  },

  async readBonusNum(winningNumArr) {
    OutputView.printBlankLine();
    while (true) {
      try {
        const bonusNum = await Console.readLineAsync(MESSAGE_ASK.bonusNum);
        Validator.valdiateBonusNum(bonusNum, winningNumArr);
        return bonusNum;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  },
};

export default InputView;
