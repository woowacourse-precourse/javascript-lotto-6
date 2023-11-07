import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class InputHandler {
  static async getUserTotalMoney() {
    return await Console.readLineAsync(MESSAGE.INPUT.LOTTO_MONEY);
  }

  static async getWinningNumberString() {
    return await Console.readLineAsync(MESSAGE.INPUT.WIN_NUMBER);
  }

  static async getBonusNumberString() {
    Console.print(MESSAGE.OUTPUT.BLANK);
    return await Console.readLineAsync(MESSAGE.INPUT.BONUS_NUMBER);
  }
}

export default InputHandler;
