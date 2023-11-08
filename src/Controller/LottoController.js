import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";
import LottoCount from "../domain/LottoCount";

class LottoController {
  #lottoCount;

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
    Console.print(this.#lottoCount.getLottoCount());
  }
}

export default LottoController;
