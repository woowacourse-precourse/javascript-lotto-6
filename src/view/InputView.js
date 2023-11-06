import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';
import { MESSAGE } from '../constants/message.js';

class InputView {
  /**
   * 구입 금액을 사용자로부터 입력 받습니다.
   * @returns {string} purchaseAmount
   */
  static async writePurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(MESSAGE.PURCHASING_MESSAGE);
    OutputView.printBlank();
    return purchaseAmount;
  }

  /**
   * 당첨 번호 6자리를 사용자에게 입력 받습니다.
   * @returns {number[]} lottosNumbers
   */
  static async writeWinningNumbers() {
    const lottosNumbers = await Console.readLineAsync(MESSAGE.WINNING_NUMBERS);
    OutputView.printBlank();
    return lottosNumbers;
  }

  /**
   * 보너스 번호 1개를 사용자에게 입력 받습니다.
   * @returns {number} bonusNnumber
   */
  static async writeBonunsNumber() {
    const bonusNnumber = await Console.readLineAsync(MESSAGE.BONUS_NUMBER);
    OutputView.printBlank();
    return bonusNnumber;
  }
}

export default InputView;
