import { Console } from '@woowacourse/mission-utils';
import { message } from '../Constants.js';

function printPurchasedLottoAmount(purchaseAmountInput) {
  const purchasedLottoAmount = purchaseAmountInput / 1000;

  Console.print(purchasedLottoAmount + message.PRINT_PURCHASE_AMOUNT);
}

export default printPurchasedLottoAmount;
