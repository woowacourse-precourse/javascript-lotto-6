import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/Messages.js';

export default class InputView {
  /**
   * 구매할 금액을 입력받습니다.
   * @returns {Promise<string>} [구매 금액 입력]
   */
  static async readPurchaseAmount() {
    return await Console.readLineAsync(INPUT_MESSAGE.purchaseAmount);
  }

  /**
   * 당첨 번호를 입력받습니다.
   * @returns {Promise<string>} [당첨 번호 입력]
   */
  static async readWinningNumbers() {
    return await Console.readLineAsync(INPUT_MESSAGE.winningNumbers);
  }

  /**
   * 보너스 번호를 입력받습니다.
   * @returns {Promise<string>} [보너스 번호 입력]
   */
  static async readBonusNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.bonusNumber);
  }
}
