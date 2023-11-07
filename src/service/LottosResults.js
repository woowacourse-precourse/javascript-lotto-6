import { LOTTO_RESULT } from '../constants/lotto.js';

class LottosResults {
  #lottoCompare;

  constructor(lottoCompare) {
    this.#lottoCompare = lottoCompare;
  }

  #getCountLottoRanks(rank) {
    return this.#lottoCompare.filter((lottoRank) => lottoRank === rank).length;
  }

  getLottosResults() {
    const ranks = Object.keys(LOTTO_RESULT);

    return ranks.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: this.#getCountLottoRanks(cur),
      }),
      {},
    );
  }
}

export default LottosResults;
