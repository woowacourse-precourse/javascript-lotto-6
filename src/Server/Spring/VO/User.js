import { ERROR_MESSAGE } from '../../../Util/Message.js';
import CONSTANTS from '../../../Util/Constants.js';
import Lotto from '../../../Lotto.js';

class User {
  #purchaseAmount;

  #lottoCount;

  #userLotto;

  constructor(purchaseAmount, generateLottoNumber) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
    this.#lottoCount = this.#purchaseAmount / CONSTANTS.lottoPrice;
    this.#purchaseLotto(generateLottoNumber);
  }

  #validate(paramPurchaseAmount) {
    const purchaseAmount = paramPurchaseAmount.trim();
    if (purchaseAmount === '') throw ERROR_MESSAGE.isBlank;
    if (Number.isNaN(Number(purchaseAmount))) throw ERROR_MESSAGE.isChar;
    if (Number(purchaseAmount) < CONSTANTS.lottoPrice) throw ERROR_MESSAGE.isAmountSmall;
    if (Number(purchaseAmount) % 1000 !== 0) throw ERROR_MESSAGE.isNotThousandDivide;
  }

  #purchaseLotto(generateLottoNumber) {
    this.#userLotto = [];
    for (let count = 0; count < this.#lottoCount; count += 1) {
      this.#userLotto.push(new Lotto(generateLottoNumber()));
    }
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  get userLotto() {
    return this.#userLotto.map((lotto) => lotto.numbers);
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default User;
