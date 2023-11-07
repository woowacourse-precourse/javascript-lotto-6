import { LOTTO_RANK, LOTTO_RESULT, LOTTO } from '../constants/lotto.js';
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

    return ranks.reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: this.#getCountLottoRanks(cur),
      };
    }, {});
  }

  #getCountLottoRanks(rank) {
    const lottoRanks = this.#getLottosRanks();

    return lottoRanks.filter((lottoRank) => lottoRank === rank).length;
  }

  #getLottosRanks() {
    return this.#lottoResults.map((result) => {
      const { includesCount, isSecond } = result;
      return this.#getRank(includesCount, isSecond);
    });
  }

  #getRank(includesCount, isSecond) {
    const { fifth, fourth, second, first } = LOTTO_RESULT;

    switch (includesCount) {
      case fifth.includesCount:
        return LOTTO_RANK.fifth;
      case fourth.includesCount:
        return LOTTO_RANK.fourth;
      case second.includesCount:
        if (isSecond) return LOTTO_RANK.second;
        return LOTTO_RANK.third;
      case first.includesCount:
        return LOTTO_RANK.first;
      default:
        return;
    }
  }

  #getTotalPrize() {
    const ranks = Object.keys(LOTTO_RESULT);

    return ranks.reduce((acc, cur) => {
      return acc + this.#lottoRanks[cur] * LOTTO_RESULT[cur].prize;
    }, 0);
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
