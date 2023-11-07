import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

class InputView {
  static async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );

    return purchaseAmount;
  }
}

export default InputView;
