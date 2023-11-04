import { PurchaseAmount } from '../purchase-amount/index.js';
import { inputMethod } from './index.js';
import { inputConstants } from '../constants/index.js';

export default async function createPurchaseAmount() {
  const inputAmount = await inputMethod(inputConstants.LOTTO_BUY_MONEY);
  const purchaseAmount = new PurchaseAmount(inputAmount);
  return purchaseAmount;
}
