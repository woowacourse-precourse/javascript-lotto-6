import { LOTTO_RESULT, LOTTO } from '../constants/lotto.js';
import { utils } from '../utils/utils.js';

class LottoResults {
  #lottoResults;
  #lottoRanks;

  constructor(lottoResults) {
    this.#lottoResults = lottoResults;
    this.#lottoRanks = this.#composeLottoRanks();
  }

  #composeLottoRanks() {
    const ranks = Object.keys(LOTTO_RESULT);

    return ranks.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: this.#getCountLottoRanks(cur),
      }),
      {},
    );
  }

  #getCountLottoRanks(rank) {
    return this.#lottoResults.filter((lottoRank) => lottoRank === rank).length;
  }

  #getTotalPrize() {
    const ranks = Object.keys(LOTTO_RESULT);

    return ranks.reduce((acc, cur) => acc + this.#lottoRanks[cur] * LOTTO_RESULT[cur].prize, 0);
  }

  getLottoReturns(purchasePrice) {
    const totalPrize = this.#getTotalPrize();
    const lottonReturns = (totalPrize / purchasePrice) * LOTTO.percentage;

    return utils.roundingSecondDecimalPlace(lottonReturns);
  }

  getLottoRank() {
    return this.#lottoRanks;
  }
}

export default LottoResults;
