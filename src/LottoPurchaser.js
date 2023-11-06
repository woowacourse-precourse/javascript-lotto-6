import LottoShop from './LottoShop.js';
import { ERROR } from './Message.js';

class LottoPurchaser {
  #ZERO = 0;

  #purchaseAmount;
  #lottos = [];

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
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

  check(winningLotto) {
    this.#lottos.forEach((lotto) => {
      const matchingNumbersCount =
        winningLotto.getMatchingNumbersCountWith(lotto);
      console.log(matchingNumbersCount);
    });
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
