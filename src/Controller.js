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

  async setBonus() {
    let isDone = false;

    while (!isDone) {
      const input = await Console.readLineAsync(
        MESSAGES.COMMENT_ENTER_BONUS_NUMBER
      );
      const result = this.#domain.setBonus(input);
      if (result) isDone = true;
    }
  }

  announceLottery() {
    return this.#domain.announceLottery();
  }

  announceProfit() {
    return this.#domain.announceProfit();
  }

  get getDomain() {
    return this.#domain;
  }
}

export default Controller;
