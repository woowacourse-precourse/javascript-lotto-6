import Domain from "./Domain.js";
import MESSAGES from "./constants/messages.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  #domain;

  constructor() {
    this.#domain = new Domain();
  }

  async purchaseLottos() {
    let isDone = false;

    while (!isDone) {
      const purchaseCost = await Console.readLineAsync(
        MESSAGES.COMMENT_ENTER_PURCHASE_PRICE
      );
      const result = this.#domain.purchaseLottos(purchaseCost);
      if (result) isDone = true;
    }
  }
}

export default Controller;
