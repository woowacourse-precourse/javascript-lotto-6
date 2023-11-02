import Purchase from "./Purchase.js";
import WinNumber from "./WinNumber.js";
import LottoData from "./LottoData.js";
import Result from "./Result.js";
import Lotto from "./Lotto.js";
import { OUTPUT } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";

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

    const result = new Result();
    result.printStaticsMessage();
  }
}

export default App;
