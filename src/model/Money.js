import { Random } from '@woowacourse/mission-utils';
import { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH, MULTIPLE, MATCH } from '../constants/constant.js';
import MoneyValidation from '../validation/MoneyValidation.js';
import makeAsendingOrder from '../util/makeAsendingOrder.js';

class Money {
  #money;

  #count;

  #lottoList;

  #match;

  constructor(money) {
    const changeTypeMoneyToNumber = Number(money);
    this.#validate(changeTypeMoneyToNumber);
    this.#money = changeTypeMoneyToNumber;
    this.#count = this.#money / MULTIPLE;
    this.#match = { ...MATCH };
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
   * 구매한 복권 리스트를 모두 반환합니다.
   * @returns {number[][]} lottoList
   */
  getLottoList() {
    return this.#lottoList;
  }

  /**
   * 구매한 금액을 반환합니다.
   * @returns {number} money
   */
  getMoney() {
    return this.#money;
  }

  /**
   *  구매한 복권 개수를 반환합니다.
   * @returns {number} count
   */
  getCount() {
    return this.#count;
  }

  /**
   * 각 복권 별 당첨 내역을 계산하는 객체를 반환합니다.
   * @returns {{ three: number, four: number, five: number, fiveAndBonus: number, six: number }} match
   */
  getMatch() {
    return this.#match;
  }
}

export default Money;
