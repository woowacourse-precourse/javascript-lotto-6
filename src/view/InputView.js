import { Console } from "@woowacourse/mission-utils";
import Calculator from "../utils/calc/Calculator.js";
import { MESSAGE_ASK, MESSAGE_ERROR } from "../static/Static.js";
import InputValidator from "../utils/validator/InputValidator.js";

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
        if (error.message.includes(MESSAGE_ERROR.purchasePrice)) {
          Console.print(error.message);
        }
        if (error.message.includes(MESSAGE_ERROR.blank)) {
          Console.print(error.message);
        }
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
