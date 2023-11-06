import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message";

class Input {
  constructor() {}

  async readLottoPurchaseAmountInput() {
    Console.print(GAME_MESSAGES.purchaseAmount);
    const amount = await Console.readLineAsync();
    return amount;
  }
}

export default Input;
