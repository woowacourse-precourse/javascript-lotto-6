import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/message.js";

class Print {
  static async getPurchaseSum() {
    const sum = await Console.readLineAsync(MESSAGE.GET_PURCHASE_SUM);
    return sum;
  }

  static showErrorMessage(message) {
    Console.print(message);
  }
}

export default Print;
