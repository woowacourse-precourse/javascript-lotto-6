import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';
import Validator from '../Validator.js';

class InputView {
  static async readPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      INPUT_MESSAGE.purchaseAmount,
    );
    Validator.checkPurchaseAmount(purchaseAmount);

    return purchaseAmount;
  }
}

export default InputView;
