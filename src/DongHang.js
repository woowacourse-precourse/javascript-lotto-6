import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Message from './utils/Message.js';
import { LOTTO_RANGE, LOTTO_COUNT, LOTTO_PRICE } from './constants/number.js';
import Input from './utils/Input.js';
import PROMPT from './constants/prompt.js';

/**
 * @classdesc 복권 발급처
 */
class DongHang {
  #winningNumbers = Object.seal({
    mainNumbers: [],
    bonusNumber: 0,
  });

  /**
   * 발급
   * @param {number} money 금액
   * @returns {Lotto[]} 발급된 복권
   */
  static issue(money) {
    const count = money / LOTTO_PRICE;
    Message.youBought(count);

    return Array.from({ length: count }, () => DongHang.issueOne());
  }

  /**
   * 발급
   * @returns {Lotto} 발급된 복권
   */
  static issueOne() {
    const { from, to } = LOTTO_RANGE;
    const numbers = Random.pickUniqueNumbersInRange(from, to, LOTTO_COUNT);
    const sorted = numbers.sort((a, b) => a - b);

    Message.array(sorted);

    return new Lotto(sorted);
  }

  /**
   * 당첨 번호와 보너스 번호를 입력받는 메서드
   */
  async inputWinningNumbers() {
    const mainNumbers = await Input.readCommaSeparatedIntegerAsync(PROMPT.WINNING_NUMBERS);

    this.#winningNumbers.mainNumbers = new Lotto(mainNumbers);
  }
}

export default DongHang;
