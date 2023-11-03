import { Console } from "@woowacourse/mission-utils";
import Messages from "../common/messages.js";

class PurchasePriceInput {
  async print() {
    let price = await Console.readLineAsync(Messages.PURCHASE_INPUT_MESSAGE);
  }
}

export default PurchasePriceInput;
