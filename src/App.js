import { Console, Random } from "woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const PURCHASE_AMOUNT = this.inputPurchaseAmount();
  }
  async inputPurchaseAmount() {
    const MONEY = await Console.readLineAsync("구입금액을 입력해 주세요.")

    return MONEY / 1000;
  }
}

export default App;
