import Lotto from "../Models/Lotto.js";
import PurchaseAmount from "../Models/PurchaseAmount.js";
import InputView from "../Views/InputView.js";
import { Random, Console } from "@woowacourse/mission-utils";
import OutputView from "../Views/OutputView.js";
import LottoYieldCalculator from "../service/LottoYieldCalculator.js";
import DrawnLotto from "../Models/DrawnLotto.js";

export default class LottoGame {
  static async start() {
    const purchaseAmount = await this.promptPurchaseAmout();
    const lottos = this.purchaseLotto(purchaseAmount.getNumberOfLottos());
    OutputView.printPurchseResults(purchaseAmount.getNumberOfLottos());
    OutputView.printLottos(lottos);

    const drawnLotto = await this.promptDrawnLottoNumbers();
    await this.promptBonusNumber(drawnLotto);

    const { drawnLottoNumbers, bonusNumber } = drawnLotto.getFullNumbers();

    const result = this.announceResult(lottos, drawnLottoNumbers, bonusNumber);
    this.announceYieldRate(result, purchaseAmount.getAmount());
  }

  static async promptPurchaseAmout() {
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
    return purchaseAmount;
  }

  static purchaseLotto(numberOfLottos) {
    const lottos = [];
    Array.from({ length: numberOfLottos }, () => {
      lottos.push(
        new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)).getNumbers()
      );
    });
    return lottos;
  }

  static async promptDrawnLottoNumbers() {
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
    return drawnLotto;
  }

  static async promptBonusNumber(drawnLotto) {
    while (true) {
      try {
        const inputbonusNumber = await InputView.promptForBonusNumber();
        drawnLotto.setBonusNumber(inputbonusNumber);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static announceResult(lottos, drawnLottoNumbers, bonusNumber) {
    const lottoYieldCalculator = new LottoYieldCalculator();
    const result = lottoYieldCalculator.getResult(
      lottos,
      drawnLottoNumbers,
      bonusNumber
    );
    OutputView.printResultMessage(result);
    return result;
  }

  static announceYieldRate(result, purchaseAmount) {
    const lottoYieldCalculator = new LottoYieldCalculator();
    const yieldRate = lottoYieldCalculator.caculateYieldRate(
      result,
      purchaseAmount
    );

    OutputView.printYieldRate(yieldRate);
  }
}
