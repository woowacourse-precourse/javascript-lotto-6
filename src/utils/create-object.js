import { PurchaseAmount, BonusNumber } from '../lotto/index.js';
import Lotto from '../Lotto.js';
import { inputMethod } from './index.js';
import { uiConstants } from '../constants/index.js';

export async function createPurchaseAmount() {
  const inputAmount = await inputMethod(
    uiConstants.RANDOM_NUMBER_PURCHASE_MONEY_MESSAGE,
  );
  const purchaseAmount = new PurchaseAmount(inputAmount);
  return purchaseAmount;
}

export async function createLottoNumber() {
  let lottoNumber = await inputMethod(uiConstants.LOTTO_NUMBER_MESSAGE);
  lottoNumber = lottoNumber.split(',').map((number) => Number(number));
  const lotto = new Lotto(lottoNumber);
  return lotto;
}

export async function createBonusNumber(lottoNumber) {
  const bonusNumber = await inputMethod(uiConstants.BOUNS_NUMBER_MESSAGE);
  const bonusObject = new BonusNumber(Number(bonusNumber), lottoNumber);
  return bonusObject;
}
