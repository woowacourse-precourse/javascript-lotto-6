import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Message from './utils/Message.js';
import { LOTTO_RANGE, LOTTO_COUNT, LOTTO_PRICE } from './constants/number.js';
import Input from './utils/Input.js';
import ValidatableArray from './validators/ValidatableArray.js';
import CustomError from './customs/CustomError.js';
import ERROR_MESSAGE from './constants/error.js';

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
    const validatableNumbers = new ValidatableArray(numbers);
    validatableNumbers.sort('asc');

    Message.array(validatableNumbers.value);

    return new Lotto(validatableNumbers);
  }

  /**
   * 당첨 번호와 보너스 번호를 입력받는 메서드
   */
  async inputWinningNumbers() {
    const mainNumbers = await Input.getWinningNumbers();

    if (!mainNumbers.isUniqueArray()) {
      throw new CustomError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }

    if (!mainNumbers.isInRange(LOTTO_RANGE.from, LOTTO_RANGE.to)) {
      throw new CustomError(ERROR_MESSAGE.NOT_IN_RANGE);
    }

    this.#winningNumbers.mainNumbers = mainNumbers;
  }
}

export default DongHang;
