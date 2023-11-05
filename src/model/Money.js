import { Random } from '@woowacourse/mission-utils';
import { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH, MULTIPLE } from '../constants/contant.js';
import MoneyValidation from '../validation/MoneyValidation.js';
import makeAsendingOrder from '../util/makeAsendingOrder.js';

class Money {
  #money;

  #count;

  #lottoList;

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
}

export default Money;
