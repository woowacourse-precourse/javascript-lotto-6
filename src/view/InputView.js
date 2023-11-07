import { Console } from '@woowacourse/mission-utils';
import { UI_PROMPTS } from '../constants/UiConstants';

export default class InputView {
  static async getPurchaseAmount() {
    return Console.readLineAsync(UI_PROMPTS.PURCHASE_AMOUNT);
  }

  static async getWinningNumbers() {
    return Console.readLineAsync(UI_PROMPTS.WINNING_NUMBERS);
  }

  static async getBonusNumber() {
    return Console.readLineAsync(UI_PROMPTS.BONUS_NUMBER);
  }
}
