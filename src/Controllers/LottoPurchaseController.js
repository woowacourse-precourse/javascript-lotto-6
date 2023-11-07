import { Lotto, PurchaseAmount } from "../Models/index.js";
import { Random } from "@woowacourse/mission-utils";
import { InputView, OutputView } from "../Views/index.js";

export default class LottoPurchaseController {
  static async purchaseLottos() {
    const purchaseAmount = await this.#promptPurchaseAmout();
    const lottos = this.#createLottos(purchaseAmount.getNumberOfLottos());

    OutputView.printPurchseResults(purchaseAmount.getNumberOfLottos());
    OutputView.printLottos(lottos);
    return { purchaseAmount, lottos };
  }

  static async #promptPurchaseAmout() {
    let purchaseAmount;
    while (true) {
      try {
        const inputMoney = await InputView.promptToBuyLottos();
        purchaseAmount = new PurchaseAmount(inputMoney);
        break;
      } catch (error) {
        OutputView.print(error.message);
      }
    }
    return purchaseAmount;
  }

  static #createLottos(numberOfLottos) {
    const lottos = [];
    Array.from({ length: numberOfLottos }, () => {
      lottos.push(
        new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)).getNumbers()
      );
    });
    return lottos;
  }
}
