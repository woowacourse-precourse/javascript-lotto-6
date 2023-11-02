import { INPUT, ERROR } from "Constants/Constants.js";
import { Console } from "@woowacourse/mission-utils";

class Purchase {
  #purchaseAmount;
  #lottoCount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCount = purchaseAmount / 1000;
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
    const input = await Console.ReadLineAsync(INPUT.purchase_amount);
    const purchaseAmount = parseInt(input);
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#lottoCount = purchaseAmount / 1000;
  }
}
