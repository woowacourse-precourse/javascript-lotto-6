import { Random } from '@woowacourse/mission-utils';
import { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH, MULTIPLE, ZERO } from '../constants/constant.js';
import MoneyValidation from '../validation/MoneyValidation.js';
import makeAsendingOrder from '../util/makeAsendingOrder.js';

class Money {
  #money;

  #count;

  #lottoList;

  #match = { three: ZERO, four: ZERO, five: ZERO, fiveAndBonus: ZERO, six: ZERO };

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.#count = money / MULTIPLE;
    this.#setLottoList();
  }

  #validate(money) {
    MoneyValidation.checkNumber(money);
    MoneyValidation.checkMultiple(money);
  }

  #setLottoList() {
    const lottoList = [];
    for (let i = 0; i < this.#count; i += 1) {
      const lotto = Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH);
      const sortlotto = makeAsendingOrder(lotto);
      lottoList.push(sortlotto);
    }
    this.#lottoList = lottoList;
  }

  /**
   *
   * @returns {number[][]} lottoList
   */
  getLottoList() {
    return this.#lottoList;
  }

  /**
   *
   * @returns {number} money
   */
  getMoney() {
    return this.#money;
  }

  /**
   *
   * @returns {number} money/MULTIPLE
   */
  getCount() {
    return this.#count;
  }

  getMatch() {
    return this.#match;
  }
}

export default Money;
