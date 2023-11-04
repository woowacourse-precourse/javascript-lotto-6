import { Console } from "@woowacourse/mission-utils";
import { USER_PROMPT } from "./utils/constants.js";

class PurchaseLottos {
  constructor() {
    this.amount;
  }

  async getLottoPurchaseAmount() {
    try {
      const input = await Console.readLineAsync(
        `${USER_PROMPT.PURCHASE_AMOUNT}\n`
      );

      this.amount = input;
    } catch (error) {
      throw error;
    }
  }

export default PurchaseLottos;
