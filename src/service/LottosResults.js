import { LOTTO_RESULT } from '../constants/lotto.js';
import LottoCompare from './LottoCompare.js';

class LottosResults {
  #lottoCompare;
  #lottos;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#lottoCompare = new LottoCompare(winningNumbers, bonusNumber);
  }

  #getCountLottoRanks(rank) {
    const lottosRanks = this.getLottosRanks();

    return lottosRanks.filter((lottoRank) => lottoRank === rank).length;
  }

  getLottoRank(includesCount, hasBonusNumber) {
    const { fifth, fourth, second, first } = LOTTO_RESULT;
    const [firstRank, secondRank, thirdRank, fourthRank, fifthRank] = Object.keys(LOTTO_RESULT);

    if (fifth.includesCount === includesCount) return fifthRank;

    if (fourth.includesCount === includesCount) return fourthRank;

    if (second.includesCount === includesCount) {
      if (hasBonusNumber) return secondRank;

      return thirdRank;
    }

    if (first.includesCount === includesCount) return firstRank;
  }

  getLottosRanks() {
    return this.#lottos.map((lotto) => {
      const includesCount = this.#lottoCompare.getCountIncludesWinningNumbers(lotto);
      const hasBonusNumber = this.#lottoCompare.hasBonusNumber(lotto);

      return this.getLottoRank(includesCount, hasBonusNumber);
    });
  }

  getLottosResultsCount() {
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
