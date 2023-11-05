import { Random } from '@woowacourse/mission-utils';
import MoneyValidation from '../validation/MoneyValidation.js';
import { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH, MULTIPLE } from '../constants/contant.js';

class Money {
  #money;

  #lottoList;

  constructor(money) {
    this.#validate(money);
    this.#money = money;
    this.#setLottoList(money);
  }

  #validate(money) {
    MoneyValidation.checkNumber(money);
    MoneyValidation.checkMultiple(money);
  }

  #setLottoList(money) {
    const count = money / MULTIPLE;
    const lottoList = [];
    for (let i = 0; i < count; i += 1) {
      lottoList.push(Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, LOTTO_LENGTH));
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
}

export default Money;
