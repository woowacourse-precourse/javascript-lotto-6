import { inputMethod } from './index.js';
import { uiConstants } from '../constants/index.js';

export default async function inputPurchaseAmount() {
  const inputAmount = await inputMethod(uiConstants.LOTTO_BUY_MONEY_MESSAGE);
  return inputAmount;
}
