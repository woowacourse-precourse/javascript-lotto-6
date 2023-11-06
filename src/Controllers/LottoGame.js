import Lotto from "../Models/Lotto.js";
import Money from "../Models/Money.js";
import InputView from "../Views/InputView.js";
import { Random, Console } from "@woowacourse/mission-utils";
import OutputView from "../Views/OutputView.js";
import LottoYieldCalculator from "../service/LottoYieldCalculator.js";
import DrawnLotto from "../Models/DrawnLotto.js";

export default class LottoGame {
  static async start() {
    let money;
    while (true) {
      try {
        const inputMoney = await InputView.promptToBuyLottos();
        money = new Money(inputMoney);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottos = [];
    Array.from({ length: money.getMoney() / 1000 }, () => {
      lottos.push(
        new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)).getNumbers()
      );
    });
    OutputView.printPurchseResults(money.getMoney() / 1000);
    OutputView.printLottos(lottos);
  }
}
