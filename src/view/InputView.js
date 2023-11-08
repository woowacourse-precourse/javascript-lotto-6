import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES } from '../constants/messages.js';

export default class InputView {
  static async printPurchaseAmount() {
    return Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
  }

  static async printWinningLottoNumbers() {
    return Console.readLineAsync(INPUT_MESSAGES.WINNING_LOTTO_NUMBERS);
  }

  static async printWinningBonusNumber() {
    return Console.readLineAsync(INPUT_MESSAGES.WINNING_BONUS_NUMBER);
  }
}
