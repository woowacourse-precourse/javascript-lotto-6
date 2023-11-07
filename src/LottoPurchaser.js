import LottoShop from './LottoShop.js';
import { ERROR } from './LottoMessage.js';
import WinningResults from './WinningResults.js';

class LottoPurchaser {
  #purchaseAmount = 0;
  #lottos = [];
  #winningResults = new WinningResults();

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  purchase() {
    const lottos = new LottoShop().sell(this.#purchaseAmount);
    this.#set(lottos);
  }

  check(winningLotto) {
    this.#lottos.forEach((lotto) => {
      const matchingCount = winningLotto.countMatchingWith(lotto);
      this.#winningResults.saveResultBy(matchingCount);
    });
  }

  getLottoCount() {
    return this.#lottos.length;
  }

  getSortedLottos() {
    const sortedLottos = this.#lottos.map((lotto) =>
      lotto.get().sort((a, b) => a - b),
    );
    return sortedLottos;
  }

  #set(lottos) {
    this.#lottos = lottos;
  }

  #validate(amount) {
    if (amount === 0) throw new Error(ERROR.falsy);
    if (Number.isNaN(amount)) throw new Error(ERROR.falsy);
  }
}

export default LottoPurchaser;
