import { LOTTO_RANKS, LOTTO_REWARDS_BY_RANK, LOTTO_RULES } from '../constants/lotto.js';

class LottoResult {
  #winningResult;

  constructor() {
    this.#winningResult = {
      [LOTTO_RANKS.first]: 0,
      [LOTTO_RANKS.second]: 0,
      [LOTTO_RANKS.third]: 0,
      [LOTTO_RANKS.fourth]: 0,
      [LOTTO_RANKS.fifth]: 0,
    };
  }

  #updateResult(rank) {
    if (rank === LOTTO_RANKS.nothing) return;
    this.#winningResult[rank] += 1;
  }

  #caculateTotalReward() {
    const winningRanks = Object.keys(this.#winningResult);
    const totalReward = winningRanks.reduce(
      (prev, current) => prev + LOTTO_REWARDS_BY_RANK[current] * this.#winningResult[current],
      0,
    );

    return totalReward;
  }

  calculateReturnRate(lottoCount) {
    const totalReward = this.#caculateTotalReward();
    const returnRate = (totalReward / (lottoCount * LOTTO_RULES.lottoPrice)) * 100;

    return returnRate.toFixed(1);
  }

  judgeLottosRank(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const lottoRank = lotto.getLottoRank(winningNumbers, bonusNumber);
      this.#updateResult(lottoRank);
    });
  }

  getWinningResult() {
    return { ...this.#winningResult };
  }
}

export default LottoResult;
