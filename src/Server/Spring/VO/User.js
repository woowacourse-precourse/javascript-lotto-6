/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { ERROR_MESSAGE } from '../../../Util/Message.js';
import CONSTANTS from '../../../Util/Constants.js';
import Lotto from './Lotto.js';

class User {
  #purchaseAmount;

  #LottoCount;

  #userLotto;

  constructor(purchaseAmount, generateLottoNumber) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
    this.#LottoCount = this.#purchaseAmount / CONSTANTS.lottoPrice;
    this.#purchaseLotto(generateLottoNumber);
  }

  #validate(paramPurchaseAmount) {
    const purchaseAmount = paramPurchaseAmount.trim();
    if (purchaseAmount === '') throw new Error(ERROR_MESSAGE.isBlank);
    if (Number.isNaN(Number(purchaseAmount))) throw new Error(ERROR_MESSAGE.isChar);
    if (Number(purchaseAmount) % 1000 !== 0) throw new Error(ERROR_MESSAGE.isNotThousandDivide);
  }

  #purchaseLotto(generateLottoNumber) {
    this.#userLotto = [];
    for (let count = 0; count < this.#LottoCount; count += 1) {
      this.#userLotto.push(new Lotto(generateLottoNumber()));
    }
  }

  get userLotto() {
    return this.#userLotto.map((lotto) => lotto.numbers);
  }
}

export default User;
