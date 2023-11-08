import { Random, Console } from '@woowacourse/mission-utils';
import inputView from '../view/inputView.js';

class PurchaseController {

  async inputPurchase() {
    const purchaseAmount = await inputView.inputPurchaseAmount();
    Console.print(purchaseAmount);
  }
}

export default PurchaseController;
