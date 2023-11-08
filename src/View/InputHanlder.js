import { Console } from '@woowacourse/mission-utils';
import ExceptionHandler from '../Lib/ExceptionHandler.js';
import MESSAGE from '../Lib/message.js';

class InputHandler {
  /**
   * 입력받은 로또 구입 금액을 검증하고 반환한다.
   *
   * @returns {number} 검증된 로또 구입 금액
   */
  async purchaseAmount() {
    const amount = await Console.readLineAsync(MESSAGE.input.PurchaseAmount);
    return ExceptionHandler.validatePurchaseAmount(amount);
  }

  /**
   * 당첨 번호 6개를 사용자로부터 입력받고, 유효성 검사를 수행한다.
   *
   * @returns {number} 검증된 로또 구입 금액
   */
  async winningNumbers() {
    const winningNumbers = await Console.readLineAsync(MESSAGE.input.WinningNumbers);
    return ExceptionHandler.validateWinningNumbers(winningNumbers);
  }

  /**
   * 보너스 번호를 사용자로부터 입력받고, 유효성 검사를 수행한다.
   *
   * @param {Array<number>} winningNumbers - 당첨 번호
   * @returns {Promise<number>} 유효한 보너스 번호
   */
  async bonusNumber(winningNumbers) {
    const bonusNumber = await Console.readLineAsync(MESSAGE.input.BonusNumbers);
    return ExceptionHandler.validateBonusNumber(bonusNumber, winningNumbers);
  }
}

export default InputHandler;
