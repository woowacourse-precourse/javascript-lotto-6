import { Lotto, PurchaseAmount } from "../Models/index.js";
import { Random } from "@woowacourse/mission-utils";
import { InputView, OutputView } from "../Views/index.js";
import { LottoSettings } from "../config/gameSetting.js";

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
      const randomLottoNumbers = this.#createRandomLottoNumbers();
      lottos.push(new Lotto(randomLottoNumbers).getNumbers());
    });
    return lottos;
  }

  static #createRandomLottoNumbers() {
    const setting = new LottoSettings();
    const { minOfLottoNumberRange, maxOfLottoNumberRange } =
      setting.getLottoNumberRange();

    const numberPerLotto = setting.getNumberPerLotto();
    return Random.pickUniqueNumbersInRange(
      minOfLottoNumberRange,
      maxOfLottoNumberRange,
      numberPerLotto
    );
  }
}
