import { inputPurchaseAmount } from './index.js';
import { PurchaseAmount } from '../lotto/index.js';

export default async function createPurchaseAmount() {
  const inputAmount = await inputPurchaseAmount();
  const purchaseAmount = new PurchaseAmount(inputAmount);
  return purchaseAmount;
}
