import { Console } from "@woowacourse/mission-utils";
import Input from "../Input/Input";

class LottoController {
  constructor() {}

  async LottoStart() {
    await this.requestPurchaseAmount();
  }

  async requestPurchaseAmount() {
    const purchaseAmount = await Input.lottoPurchaseAmount();
    Console.print(purchaseAmount);
    Console.print(typeof purchaseAmount);
  }
}

export default LottoController;
