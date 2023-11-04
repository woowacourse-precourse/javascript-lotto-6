import { PurchaseAmount } from '../lotto/index.js';
import { inputMethod } from './index.js';
import { uiConstants, magicNumber } from '../constants/index.js';

export default async function createPurchaseAmount() {
  const inputAmount = await inputMethod(uiConstants.LOTTO_BUY_MONEY_MESSAGE);
  const purchaseAmount = new PurchaseAmount(inputAmount);
  return [
    purchaseAmount.getPurchaseAmount(),
    purchaseAmount.getPurchaseAmount() / magicNumber.UNIT,
  ];
}
