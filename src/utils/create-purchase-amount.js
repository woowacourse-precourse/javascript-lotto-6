import { PurchaseAmount } from '../purchase-amount/index.js';
import { InputMethod } from './index.js';
import { inputConstants } from '../constants/index.js';

export default class CreatePurchaseAmount {
  static async inputPurchaseAmount() {
    const inputAmount = await InputMethod.input(inputConstants.LOTTO_BUY_MONEY);
    const purchaseAmount = new PurchaseAmount(inputAmount);
    return purchaseAmount;
  }
}
