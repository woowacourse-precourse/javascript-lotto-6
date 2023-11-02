import Purchase from "./Purchase.js";
import WinNumber from "./WinNumber.js";
import { OUTPUT } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchase = new Purchase();
    const winNumber = new WinNumber();

    await purchase.inputPurchaseAmount();
    Console.print(OUTPUT.linebreak);
    Console.print(purchase.getLottoCount() + OUTPUT.how_many_purchased);
    await winNumber.inputWinNumber();
    await winNumber.inputBonusNumber();
  }
}

export default App;
