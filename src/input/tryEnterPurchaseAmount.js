import enterPurchaseAmount from './enterPurchaseAmount.js';
import { Console } from '@woowacourse/mission-utils';

async function tryEnterPurchaseAmount() {
  let purchaseAmount;

  async function tryEnter() {
    try {
      purchaseAmount = await enterPurchaseAmount();
      return purchaseAmount;
    } catch (e) {
      Console.print(e.message);
      return tryEnter();
    }
  }

  return tryEnter();
}

export default tryEnterPurchaseAmount;
