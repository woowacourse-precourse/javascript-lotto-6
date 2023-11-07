import { Console, Random } from "woowacourse/mission-utils";
import {INPUT, OUTPUT_ERROR} from "./text.js";
class App {
  async play() {
    const PURCHASE_AMOUNT = this.inputPurchaseAmount();
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync(INPUT.input_money);
    if (MONEY % 1000 !== 0) {
      throw new Error(OUTPUT_ERROR.money_err);
    }
    return MONEY / 1000;
  }
}

export default App;
