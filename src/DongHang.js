import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Message from './utils/Message.js';
import { LOTTO_RANGE, LOTTO_COUNT, LOTTO_PRICE } from './constants/number.js';
import Input from './utils/Input.js';
import PROMPT from './constants/prompt.js';
import NumberValidator from './validators/NumberValidator.js';
import CustomError from './exceptions/CustomError.js';
import ERROR_MESSAGE from './constants/error.js';
import WinningNumbers from './WinningNumbers.js';
import reTryCatch from './exceptions/reTryCatch.js';
import ArrayValidator from './validators/ArrayValidator.js';
import TypeValidator from './validators/TypeValidator.js';

/**
 * @classdesc 복권 발급처
 * 복권 발급처는 복권을 발급, 당첨 번호를 입력받는 기능을 가진다.
 */
class DongHang {
  /**
   * 주어진 금액만큼 발급
   * @param {number} money 금액
   * @returns {Lotto[]} 발급된 복권
   */
  static issue(money) {
    const count = money / LOTTO_PRICE;
    Message.youBought(count);

    return Array.from({ length: count }, () => DongHang.issueOne());
  }

  /**
   * 단건 발급
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
   * 사용자로부터 당첨 번호와 보너스 번호를 입력받아 WinningNumbers 객체를 생성한다.
   * @returns {Promise<WinningNumbers>}
   */
  static async makeWinningNumbers() {
    const main = await reTryCatch(async () => DongHang.inputWinningNumbers());
    const bonus = await reTryCatch(async () => DongHang.inputBonusNumber(main));

    return new WinningNumbers(main, bonus);
  }

  static async inputWinningNumbers() {
    const mainInput = await Input.readCommaSeparatedAsync(PROMPT.WINNING_NUMBERS);

    const message = ArrayValidator.validateLottoNumbers(mainInput);
    if (!TypeValidator.isEmpty(message)) throw new CustomError(message);

    return mainInput;
  }

  /**
   * @param {number[]} mainInput
   * @returns {Promise<number>}
   */
  static async inputBonusNumber(mainInput) {
    const bonusInput = await Input.readIntegerAsync(PROMPT.BONUS_NUMBER);

    if (!NumberValidator.isInRange(bonusInput, LOTTO_RANGE)) {
      throw new CustomError(ERROR_MESSAGE.NOT_IN_RANGE);
    }
    if (mainInput.includes(bonusInput)) {
      throw new CustomError(ERROR_MESSAGE.DUPLICATED_NUMBER);
    }

    return bonusInput;
  }
}

export default DongHang;
