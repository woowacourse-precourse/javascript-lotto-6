import Lotto from '../Lotto.js';

import {
  generateLotteryNumber,
  generateStatistics,
  throwError,
} from '../utils/index.js';
import { ERROR_MESSAGE, LOTTO } from '../utils/constants.js';

class UserLottoModel {
  /**
   * @description 로또 구매 금액
   * @example 2000
   */
  #amount = 0;

  /**
   * @description 유저가 구매한 로또들
   * @example [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
   */
  #userLottos = [];

  /**
   * @description 유저가 구매한 로또들의 당첨 통계
   * - 5등부터 1등까지 순서대로 당첨된 개수를 담고 있다.
   * @example [10, 0, 3, 0, 0]
   */
  #statistics = [];

  getUserLottos() {
    return this.#userLottos.map((lotto) => lotto.getNumbers());
  }

  getAmount() {
    return this.#amount;
  }

  getStatistics() {
    return this.#statistics;
  }

  setAmount(amount) {
    this.#isNotAmountUnit(amount);
    this.#isNotEnoughAmount(amount);
    this.#amount = amount;
    this.#userLottos = this.#generateLotto();
  }

  setStatistics(matchCountByLottos) {
    const statistics = generateStatistics();

    matchCountByLottos.forEach((counts) => {
      const key = `${counts[0]},${counts[0] === 5 ? counts[1] : 0}`;

      if (key in statistics) {
        statistics[key] += 1;
      }
    });

    this.#statistics = Object.values(statistics);
  }

  #generateLotto() {
    const count = this.#amount / LOTTO.amount_unit;
    const userLotto = Array.from(
      { length: count },
      () => new Lotto(generateLotteryNumber()),
    );

    return userLotto;
  }

  #isNotAmountUnit(amount) {
    throwError(ERROR_MESSAGE.amount_division, amount % LOTTO.amount_unit !== 0);
  }

  #isNotEnoughAmount(amount) {
    throwError(ERROR_MESSAGE.amount_division, amount < LOTTO.amount_unit);
  }
}

export default UserLottoModel;
