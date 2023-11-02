import Purchase from "./Purchase.js";
import { OUTPUT } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchase = new Purchase();
    await purchase.inputPurchaseAmount();
    Console.print(OUTPUT.linebreak);
    Console.print(purchase.getLottoCount() + OUTPUT.how_many_purchased);
  }
}

export default App;
