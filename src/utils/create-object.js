import { inputLottoNumber, inputPurchaseAmount } from './index.js';
import { PurchaseAmount, Lotto } from '../lotto/index.js';

export async function createPurchaseAmount() {
  const inputAmount = await inputPurchaseAmount();
  const purchaseAmount = new PurchaseAmount(inputAmount);
  return purchaseAmount;
}

export async function createLottoNumber() {
  let lottoNumber = await inputLottoNumber();
  lottoNumber = lottoNumber.split(',');
  const lotto = new Lotto(lottoNumber);
  return lotto;
}
