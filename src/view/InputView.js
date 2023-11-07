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
        InputValidator.validatePurchasePrice(purchasePrice);
        const purchaseQuantity = Calculator.calcPurchaseQuantity(purchasePrice);
        return purchaseQuantity;
      } catch (error) {
        OutputView.printPurchasePriceError(error);
      }
    }
  },

  async readWinningNums() {
    try {
      return await Console.readLineAsync(MESSAGE_ASK.winningNums);
    } catch (error) {}
  },

  async readBonusNum() {
    try {
      return await Console.readLineAsync(MESSAGE_ASK.bonusNum);
    } catch (error) {}
  },
};

export default InputView;
