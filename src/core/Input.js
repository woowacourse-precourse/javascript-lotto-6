//@ts-check

import { Console } from "@woowacourse/mission-utils";
import Assert from "./Assert.js";

export default class Input {
  /** @type {Assert} */
  #assert;

  constructor() {
    this.#assert = new Assert();
  }

  /**
   * @returns {Promise<number>}
   */
  async askPurchaseValue() {
    let purchaseValue;

    while (true) {
      try {
        const response = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );

        purchaseValue = parseInt(response);
        this.#assert.assertPurchaseValue(purchaseValue);

        break;
      } catch (error) {
        Console.print(error.message + "\n");
      }
    }

    return purchaseValue;
  }
}
