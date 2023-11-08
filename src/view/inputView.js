import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSEGE } from '../constant/messages.js';

class inputView {
  static async inputPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(INPUT_MESSEGE.purchase);
    return Number(purchaseAmount);
  }
}

export default inputView;
