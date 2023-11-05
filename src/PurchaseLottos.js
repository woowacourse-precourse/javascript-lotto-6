import { DIVISOR } from "./utils/constants.js";
import { Console } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class PurchaseLottos {
  constructor() {
    this.amount = null;
  }

  async getLottoAmount() {
    try {
      const input = await Console.readLineAsync(USER_PROMPT.PURCHASE_AMOUNT);
      this.amount = parseInt(input);
      return this.amount / DIVISOR;
    } catch (error) {
      throw error;
    }
  }

  async inputWinningNumbers() {
    try {
      const input = await Console.readLineAsync(USER_PROMPT.WINNING_NUMBERS);

      return input;
    } catch (error) {
      throw error;
    }
  }
}

export default PurchaseLottos;
