import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, LOTTO } from './Constants.js';
import Lotto from './Lotto.js';
import { getPurchasePrice, getLottoNumbers, getBounusNumber } from './App.js';

function validatePurchasePrice(purchasePrice) {
  if (purchasePrice.length < 1) {
    throw new Error(ERROR_MESSAGE.PRICE_INPUT.NOTHING);
  }
  if (isNaN(purchasePrice)) {
    throw new Error(ERROR_MESSAGE.PRICE_INPUT.NOT_A_NUMBER);
  }
  if (purchasePrice % LOTTO.PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.PRICE_INPUT.WRONG_UNIT);
  }
}

async function getValidPurchasePrice() {
  while (true) {
    try {
      const purchasePrice = await getPurchasePrice();
      validatePurchasePrice(purchasePrice);
      return purchasePrice;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

async function getValidLottoNumber() {
  while (true) {
    try {
      const numbers = await getLottoNumbers();
      const lotto = new Lotto(numbers);
      return lotto.Numbers;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

function validateBonusNumber(bonusnumber) {
  if (bonusnumber.length < 1) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER.NOTHING);
  }
  if (isNaN(bonusnumber)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER.NOT_A_NUMBER);
  }
}

async function getValidBonusNumber() {
  while (true) {
    try {
      const bonusNumber = await getBounusNumber();
      validateBonusNumber(bonusNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export { getValidPurchasePrice, getValidLottoNumber, getValidBonusNumber };
