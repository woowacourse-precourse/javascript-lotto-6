import { Console } from '@woowacourse/mission-utils';
import messages from './constants/messages';

class InputHandler {
  static async inputPurchaseAmount() {
    return await Console.readLineAsync(messages.purchase.try);
  }

  static async inputWinningNumbers() {
    return await Console.readLineAsync(messages.number.winning);
  }

  static async inputBonusNumber() {
    return await Console.readLineAsync(messages.number.bonus);
  }
}

export default InputHandler;
