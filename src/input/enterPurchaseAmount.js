import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

import validatePurchaseAmount from '../validation/validatePurchaseAmount.js';

async function enterPurchaseAmount() {
  const purchaseAmountInput = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);

  if (validatePurchaseAmount(purchaseAmountInput)) {
    return Number(purchaseAmountInput);
  }

  throw new Error(message.ERROR);
}

export default enterPurchaseAmount;
