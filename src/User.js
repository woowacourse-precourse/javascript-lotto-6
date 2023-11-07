import { Console } from '@woowacourse/mission-utils';
import DongHang from './DongHang.js';
import ERROR_MESSAGE from './constants/error.js';
import { LOTTO_PRICE } from './constants/number.js';
import CustomError from './customs/CustomError.js';
import Input from './utils/Input.js';
import PROMPT from './constants/prompt.js';
import NumberValidator from './validators/NumberValidator.js';
// eslint-disable-next-line no-unused-vars
import WinningNumbers from './WinningNumbers.js';

/**
 * @classdesc 복권 구매자
 * 구매자는 구매, 확인 두가지 행동을 할 수있다.
 */
class User {
  /**
   * @type {Lotto[]}
   */
  #lottos;

  /**
   * 등수
   * @type {number[]}
   * @example [0, 0, 0, 0, 0] // 1등, 2등, 3등, 4등, 5등
   */
  #results = [0, 0, 0, 0, 0];

  #statisticsMap = [
    (count) => `3개 일치 (5,000원) - ${count}개`,
    (count) => `4개 일치 (50,000원) - ${count}개`,
    (count) => `5개 일치 (1,500,000원) - ${count}개`,
    (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
    (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  ];

  /**
   * 로또를 구매하는 메서드
   */
  async buy() {
    const money = await Input.readIntegerAsync(PROMPT.BUY_COST);

    if (!NumberValidator.isDivisibleBy(money, LOTTO_PRICE)) {
      throw new CustomError(ERROR_MESSAGE.NOT_DIVISIBLE_BY_LOTTO_PRICE);
    }

    this.#lottos = DongHang.issue(money);
  }

  /**
   * @param {WinningNumbers} winningNumbers
   */
  checkAll(winningNumbers) {
    this.#lottos.forEach((lotto) => {
      const result = winningNumbers.check(lotto);
      const rank = result.getRank();

      if (rank > -1) this.#results[rank] += 1;
    });
  }

  printStatistics() {
    const stats = this.#statisticsMap.map((formatter, index) => formatter(this.#results[index]));
    stats.forEach((stat) => Console.print(stat));
  }
}

export default User;
