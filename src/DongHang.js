import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import { LOTTO_RANGE, LOTTO_COUNT, LOTTO_PRICE } from './constants/number.js';
import Message from './utils/Message.js';

/**
 * @classdesc 복권 발급처
 */
class DongHang {
  /**
   * 발급
   * @param {number} money 금액
   * @returns {Lotto[]} 발급된 복권
   */
  static issue(money) {
    const count = money / LOTTO_PRICE;
    Message.youBought(count);

    return Array.from({ length: count }, () => this.issueOne());
  }

  /**
   * 발급
   * @returns {Lotto} 발급된 복권
   */
  static issueOne() {
    const { from, to } = LOTTO_RANGE;
    const numbers = Random.pickUniqueNumbersInRange(from, to, LOTTO_COUNT);

    return new Lotto(numbers);
  }
}

export default DongHang;
