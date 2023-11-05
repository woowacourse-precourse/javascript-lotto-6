import { inputMethod } from './index.js';
import { uiConstants } from '../constants/index.js';

export async function inputPurchaseAmount() {
  const inputAmount = await inputMethod(
    uiConstants.RANDOM_NUMBER_PURCHASE_MONEY_MESSAGE,
  );
  return inputAmount;
}

export async function inputLottoNumber() {
  const inputNumber = await inputMethod(uiConstants.LOTTO_NUMBER_MESSAGE);
  return inputNumber;
}
