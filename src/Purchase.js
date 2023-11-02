import { INPUT, ERROR } from "./Constants.js";
import { Console } from "@woowacourse/mission-utils";

class Purchase {
  #lottoCount;

  constructor() {
    this.#lottoCount = 0;
  }

  #validate(purchaseAmount) {
    if (
      typeof purchaseAmount !== "number" ||
      purchaseAmount <= 0 ||
      purchaseAmount % 1000 !== 0
    ) {
      throw new Error(ERROR.purchase_amount_error);
    }
  }

  async inputPurchaseAmount() {
    const input = await Console.readLineAsync(INPUT.purchase_amount);
    const purchaseAmount = parseInt(input);
    this.#validate(purchaseAmount);
    this.#lottoCount = purchaseAmount / 1000;
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

export default Purchase;
