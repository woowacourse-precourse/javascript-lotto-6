import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from '../Constants.js';

class InputManager {
  async enterPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      GUIDE_MESSAGES.ENTER_PURCHASE_AMOUNT
    );
    return purchaseAmountInput;
  }
}

export default InputManager;
