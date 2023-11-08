import { Console } from "@woowacourse/mission-utils";
import Calculator from "../utils/calc/Calculator.js";
import { MESSAGE_ASK } from "../static/Static.js";
import InputValidator from "../utils/validator/InputValidator.js";
import OutputView from "./OutputView.js";
import { SEPARATOR } from "../static/Static.js";

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
        const winningNumArr = winningNums.split(SEPARATOR.comma);
        InputValidator.validateLength(winningNumArr);
        InputValidator.validateDuplication(winningNumArr);
        winningNumArr.map((num) => {
          InputValidator.validateNumRange(num);
        });
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
        InputValidator.validateNumRange(bonusNum);
        InputValidator.validateInWinningNums(bonusNum, winningNums);
        return bonusNum;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  },
};

export default InputView;
