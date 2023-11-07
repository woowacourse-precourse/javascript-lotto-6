import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constant/MESSAGE.js";

class InputHandler {
  static async getUserTotalMoney() {
    return await Console.readLineAsync(MESSAGE.INPUT.LOTTO_MONEY);
  }
}

export default InputHandler;
