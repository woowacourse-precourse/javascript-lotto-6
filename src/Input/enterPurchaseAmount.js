import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants';

async function enterPurchaseAmount() {
  const purchaseAmountInput = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);
}

export default enterPurchaseAmount;
