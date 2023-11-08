import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from './Constants.js';

async function getPurchasePrice() {
  const price = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.PURCHASE_PRICE);
  const purchasePrice = Number(price);
  return purchasePrice;
}

async function getLottoNumbers() {
  const lottoNumbers = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.LOTTO_NUMBERS);
  const lottoNumbersArr = lottoNumbers.split(',').map(Number);
  return lottoNumbersArr;
}

async function getBounusNumber() {
  const bonusNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  return bonusNumber;
}

export { getPurchasePrice, getLottoNumbers, getBounusNumber };
