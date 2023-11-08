import { Console } from '@woowacourse/mission-utils';
import message from '../utils/message.js';

class InputView {
  static async purchaseAmount() {
    const inputAmount = await Console.readLineAsync(message.ASK_INPUT_AMOUNT);
    return inputAmount;
  }

  static async sixWinningNumbers() {
    const numbers = await Console.readLineAsync(message.ASK_WINNING_NUMBER);
    return numbers.replace(/ /g, '');
  }

  static async bonusNumber() {
    const numbers = await Console.readLineAsync(message.ASK_BONUS_NUMBER);
    return numbers;
  }
}
export default InputView;
