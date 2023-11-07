import { Console, Random } from "woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import {INPUT} from "./text.js";
class App {
  async play() {
    const PURCHASE_AMOUNT = this.inputPurchaseAmount();
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync(INPUT.input_money);
    
    return MONEY / 1000;
  }
}

export default App;
