import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

class InputView {
  /**
   * 구입금액을 입력 받는다.
   * @returns {string}
   */
  async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGES.purchase);
    return purchaseAmount;
  }

  /**
   * 당첨 번호를 입력 받는다.
   * @returns {string}
   */
  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      INPUT_MESSAGES.winningNumbers,
    );

    return winningNumbers;
  }

  /**
   * 보너스 번호를 입력받는다.
   * @returns {string}
   */
  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGES.bonusNumber);

    return bonusNumber;
  }
}

export default InputView;
