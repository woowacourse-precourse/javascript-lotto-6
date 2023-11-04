import { Console } from "@woowacourse/mission-utils";
import Calculator from "../utils/calc/Calculator.js";
import { ASK_MESSAGE } from "../static/Static.js";

const InputView = {
  async readPurchasePrice() {
    try {
      const purchasePrice = await Console.readLineAsync(
        ASK_MESSAGE.purchasePrice
      );
      const purchaseQuantity = Calculator.calcPurchaseQuantity(purchasePrice);
      return purchaseQuantity;
    } catch (error) {}
  },

  async readWinningNums() {
    try {
      const purchasePrice = await Console.readLineAsync(
        ASK_MESSAGE.winningNums
      );
      const purchaseQuantity = Calculator.calcPurchaseQuantity(purchasePrice);
      return purchaseQuantity;
    } catch (error) {}
  },

  async readBonusNum() {
    try {
      const purchasePrice = await Console.readLineAsync(ASK_MESSAGE.bonusNum);
      const purchaseQuantity = Calculator.calcPurchaseQuantity(purchasePrice);
      return purchaseQuantity;
    } catch (error) {}
  },
};

export default InputView;
