import LottoShop from './LottoShop.js';
import { ERROR } from './Message.js';

class LottoPurchaser {
  #ZERO = 0;

  #purchaseAmount;
  #lottos = [];

  constructor(purchaseAmount) {
    this.#validate(Number(purchaseAmount));
    this.#purchaseAmount = Number(purchaseAmount);
  }

  purchase() {
    const lottos = new LottoShop().sell(this.#purchaseAmount);
    this.#set(lottos);
  }

  getNumbersOfLottos() {
    return this.#lottos.length;
  }

  getSortedLottos() {
    const array = this.#lottos.map((lotto) => lotto.getSortedLotto());
    return array;
  }

  #set(lottos) {
    this.#lottos = lottos;
  }

  #validate(value) {
    if (value === this.#ZERO) throw new Error(ERROR.falsy);
    if (Number.isNaN(value)) throw new Error(ERROR.falsy);
  }
}

export default LottoPurchaser;
