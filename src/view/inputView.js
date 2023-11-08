import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSEGE } from '../constant/messages.js';

class InputView {
  static async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSEGE.purchase);
    return purchaseAmount;
  }

  static async inputWinningNumber() {
    const winningNumber = await Console.readLineAsync(INPUT_MESSEGE.winning);
    return winningNumber;
  }
}

export default InputView;
