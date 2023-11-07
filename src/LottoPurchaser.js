import LottoShop from './LottoShop.js';
import { ERROR } from './LottoMessage.js';

class LottoPurchaser {
  #purchaseAmount = 0;
  #lottos = [];
  #winningResults;

  constructor(purchaseAmount, winningResults) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
    this.#winningResults = winningResults;
  }

  purchase() {
    const lottos = new LottoShop().sell(this.#purchaseAmount);
    this.#setLottos(lottos);
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

  getResultMap() {
    return this.#winningResults.getReversedResultMap();
  }

  getProfitRate() {
    return this.#winningResults.getProfitRate(this.#purchaseAmount);
  }

  #setLottos(lottos) {
    this.#lottos = lottos;
  }

  #validate(amount) {
    if (amount === 0) throw new Error(ERROR.falsy);
    if (Number.isNaN(amount)) throw new Error(ERROR.falsy);
  }
}

export default LottoPurchaser;
