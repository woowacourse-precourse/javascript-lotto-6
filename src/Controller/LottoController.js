import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";
import Output from "../Output/Output";
import LottoCount from "../domain/LottoCount";
import Lottos from "../domain/Lottos";

class LottoController {
  #lottoCount;
  #lottos;

  constructor() {}

  async LottoStart() {
    await this.requestPurchaseAmount();
  }

  async requestPurchaseAmount() {
    const purchaseAmount = await Input.lottoPurchaseAmount();
    await this.purchasedLottoCount(purchaseAmount);
  }

  async purchasedLottoCount(inputPurchaseAmount) {
    this.#lottoCount = new LottoCount(inputPurchaseAmount);
    Output.printLottoCount(this.#lottoCount.getLottoCount());

    this.#lottos = new Lottos(this.#lottoCount.getLottoCount());
    Output.printLottos(this.#lottos.getLottos());
  }
}

export default LottoController;
