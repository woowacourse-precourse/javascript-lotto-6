import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/message";

class Input {
  constructor() {}

  async readLottoPurchaseAmountInput() {
    Console.print(GAME_MESSAGES.purchaseAmount);
    const amount = await Console.readLineAsync();
    return amount;
  }

  async readLottoWinningNumbersInput() {
    Console.print(GAME_MESSAGES.WinningNumbers);
    const winngNumbers = await Console.readLineAsync();
    return winngNumbers;
  }
}

export default Input;
