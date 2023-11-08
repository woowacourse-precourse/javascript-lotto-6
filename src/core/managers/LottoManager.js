import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { LOTTO_NUMBER_RANGE, WINNING_NUMBER_AMOUNT } from "../const.js";

export default class LottoManager {
  constructor() {}

  /**
   *
   * @param {number} amount
   * @returns {Lotto[]}
   */
  makeLottos(amount) {
    const lottos = [];

    while (amount--) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_RANGE.min,
        LOTTO_NUMBER_RANGE.max,
        WINNING_NUMBER_AMOUNT
      );

      lottos.push(new Lotto(numbers));
    }

    return lottos;
  }
}
