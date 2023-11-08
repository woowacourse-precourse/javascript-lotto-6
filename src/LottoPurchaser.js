import { LOTTO } from './LottoInfo.js';

class LottoPurchaser {
  #lottos = [];
  #winningResults;

  constructor(winningResults) {
    this.#winningResults = winningResults;
  }

  purchase(lottos) {
    this.#lottos = lottos;
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

  getLottos() {
    return this.#lottos.map((lotto) => lotto.get());
  }

  getWinningResults() {
    return this.#winningResults.get();
  }

  getProfitRate() {
    const purchaseAmount = this.getLottoCount() * LOTTO.price;
    return this.#winningResults.getProfitRate(purchaseAmount);
  }
}

export default LottoPurchaser;
