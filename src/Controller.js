import { Console } from "@woowacourse/mission-utils";

import MESSAGES from "./constants/messages.js";
import Domain from "./Domain.js";

class Controller {
  #domain;

  constructor() {
    this.#domain = new Domain();
  }

  async purchaseLottos() {
    let isDone = false;

    while (!isDone) {
      const input = await Console.readLineAsync(
        MESSAGES.COMMENT_ENTER_PURCHASE_PRICE
      );
      const result = this.#domain.purchaseLottos(input);
      if (result) isDone = true;
    }
  }

  async setWinnings() {
    let isDone = false;

    while (!isDone) {
      const input = await Console.readLineAsync(
        MESSAGES.COMMENT_ENTER_WINNING_NUMBERS
      );
      const result = this.#domain.setWinnings(input);
      if (result) isDone = true;
    }
  }
}

export default Controller;
