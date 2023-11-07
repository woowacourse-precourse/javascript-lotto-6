import Lotto from "../Models/Lotto.js";
import PurchaseAmount from "../Models/PurchaseAmount.js";
import InputView from "../Views/InputView.js";
import { Random, Console } from "@woowacourse/mission-utils";
import OutputView from "../Views/OutputView.js";
import LottoYieldCalculator from "../service/LottoYieldCalculator.js";
import DrawnLotto from "../Models/DrawnLotto.js";
import { LOTTO_SETTINGS } from "../config/gameSetting.js";

export default class LottoGame {
  static async start() {
    let purchaseAmount;
    while (true) {
      try {
        const inputMoney = await InputView.promptToBuyLottos();
        purchaseAmount = new PurchaseAmount(inputMoney);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const lottos = [];
    Array.from({ length: purchaseAmount.getNumberOfLottos() }, () => {
      lottos.push(
        new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)).getNumbers()
      );
    });
    OutputView.printPurchseResults(purchaseAmount.getNumberOfLottos());
    OutputView.printLottos(lottos);

    let drawnLotto;
    while (true) {
      try {
        const inputdrawnLottoNumbers =
          await InputView.promptForDrawnLottoNumbers();
        drawnLotto = new DrawnLotto(inputdrawnLottoNumbers);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    while (true) {
      try {
        const inputbonusNumber = await InputView.promptForBonusNumber();
        drawnLotto.setBonusNumber(inputbonusNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    const { drawnLottoNumbers, bonusNumber } = drawnLotto.getFullNumbers();

    const lottoYieldCalculator = new LottoYieldCalculator(LOTTO_SETTINGS);
    const result = lottoYieldCalculator.getResult(
      lottos,
      drawnLottoNumbers,
      bonusNumber
    );

    OutputView.printResultMessage(result);
    const yieldRate = lottoYieldCalculator.caculateYieldRate(
      result,
      purchaseAmount.getAmount()
    );

    OutputView.printYieldRate(yieldRate);
  }
}
