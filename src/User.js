import DongHang from './DongHang.js';
import ERROR_MESSAGE from './constants/error.js';
import { LOTTO_PRICE } from './constants/number.js';
import CustomError from './exceptions/CustomError.js';
import Input from './utils/Input.js';
import PROMPT from './constants/prompt.js';
import NumberValidator from './validators/NumberValidator.js';
import reTryCatch from './exceptions/reTryCatch.js';

/**
 * @classdesc 복권 구매자
 * 구매자는 구매, 확인 두가지 행동을 할 수있다.
 */
class User {
  /**
   * @type {Lotto[]}
   */
  #lottos;

  #results = [];

  /**
   * 로또를 구매하는 메서드
   */
  async buy() {
    const money = await reTryCatch(async () => Input.readIntegerAsync(PROMPT.BUY_COST));

    if (!NumberValidator.isDivisibleBy(money, LOTTO_PRICE)) {
      throw new CustomError(ERROR_MESSAGE.NOT_DIVISIBLE_BY_LOTTO_PRICE);
    }

    this.#lottos = DongHang.issue(money);
  }

  /**
   * 로또를 확인하는 메서드
   *
   * 로또 결과 객체 배열을 반환한다.
   * @param {WinningNumbers} winningNumbers
   * @returns {LottoResult[]}
   */
  checkAll(winningNumbers) {
    this.#lottos.forEach((lotto) => {
      const result = winningNumbers.check(lotto);

      this.#results.push(result);
    });

    return this.#results;
  }
}

export default User;
