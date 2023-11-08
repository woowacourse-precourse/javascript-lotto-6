//@ts-check

import { Console } from "@woowacourse/mission-utils";
import Assert from "../Assert.js";
import { parseToCommaSeperatedIntegers } from "../../utils/parse.js";

export default class Input {
  /** @type {Assert} */
  #assert;

  /** @type {number[]} */
  #winningNumbers = [];

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
          "\n구입금액을 입력해 주세요.\n"
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

  /**
   * @returns {Promise<number[]>}
   */
  async askWinningNumbers() {
    while (true) {
      try {
        const response = await Console.readLineAsync(
          "\n당첨 번호를 입력해주세요.\n"
        );

        this.#winningNumbers = parseToCommaSeperatedIntegers(response);
        this.#assert.assertWinningNumber(this.#winningNumbers);

        break;
      } catch (error) {
        Console.print(error.message + "\n");
      }
    }

    return this.#winningNumbers;
  }

  /**
   * @returns {Promise<number>}
   */
  async askBounsNumber() {
    let bonusNumber;

    while (true) {
      try {
        const response = await Console.readLineAsync(
          "\n보너스 번호를 입력해 주세요.\n"
        );

        bonusNumber = parseInt(response);
        this.#assert.assertBounsNumber(bonusNumber, this.#winningNumbers);

        break;
      } catch (error) {
        Console.print(error.message + "\n");
      }
    }

    return bonusNumber;
  }
}
