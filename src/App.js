import Purchase from "./Purchase.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchase = new Purchase();
    await purchase.inputPurchaseAmount();
  }
}

export default App;
