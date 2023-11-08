import { Random, Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/outputView.js';
import { ERROR_MESSEGE } from '../constant/messages.js';

class PurchaseController {
  async inputPurchase() {
    while (true) {
      try {
        const purchaseAmount = await InputView.inputPurchaseAmount();
        this.validatePurchaseAmount(purchaseAmount);
        Console.print(purchaseAmount);
        break;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
  }

  validatePurchaseAmount(purchaseAmount) {
    if (!purchaseAmount) {
      throw new Error(ERROR_MESSEGE.notInput);
    }

    if (isNaN(purchaseAmount)) {
      throw new Error(ERROR_MESSEGE.notNumber);
    }

    if (purchaseAmount <= 0) {
      throw new Error(ERROR_MESSEGE.notPositive);
    }

    if (purchaseAmount % 1000 !== 0) {
      throw new Error(ERROR_MESSEGE.not1000Multiple);
    }
  }
}

export default PurchaseController;
