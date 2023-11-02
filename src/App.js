import Purchase from "./Purchase.js";
import WinNumber from "./WinNumber.js";
import { OUTPUT } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";
import LottoData from "./LottoData.js";

class App {
  async play() {
    const purchase = new Purchase();
    const winNumber = new WinNumber();

    await purchase.inputPurchaseAmount();
    Console.print(OUTPUT.linebreak);
    Console.print(purchase.getLottoCount() + OUTPUT.how_many_purchased);

    const lottoData = new LottoData(purchase.getLottoCount());
    lottoData.iterLotto();

    await winNumber.inputWinNumber();
    await winNumber.inputBonusNumber();

    Console.print(OUTPUT.statics);
  }
}

export default App;
