import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { LOTTO_NUMBER_RANGE, WINNING_NUMBER_AMOUNT } from "../const.js";

export default class LottoManager {
  /** @type {Lotto[]} */
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  /**
   *
   * @param {number} amount
   * @returns {Lotto[]}
   */
  makeLottos(amount) {
    this.#lottos = [];

    while (amount--) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_RANGE.min,
        LOTTO_NUMBER_RANGE.max,
        WINNING_NUMBER_AMOUNT
      );

      this.#lottos.push(new Lotto(numbers));
    }

    return this.#lottos;
  }

  /**
   *
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  makeResultBoard(winningNumbers, bonusNumber) {
    const board = {
      three: 0,
      four: 0,
      five: 0,
      bonusFive: 0,
      six: 0,
    };

    this.#lottos
      .map((lotto) => lotto.matchResult(winningNumbers, bonusNumber))
      .filter((field) => field !== null)
      .forEach((field) => board[field]++);

    return board;
  }
}
