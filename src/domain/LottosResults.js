import { LOTTO_RESULT, LOTTO } from '../constants/lotto.js';
import { COMMON } from '../constants/common.js';
import LottoCompare from './LottoCompare.js';

class LottosResults {
  #lottoCompare;
  #lottos;
  #initialLottoResults;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#lottoCompare = new LottoCompare(winningNumbers, bonusNumber);
    this.#initialLottoResults = this.#getInitialLottoResults();
  }

  #getInitialLottoResults() {
    return Object.keys(LOTTO_RESULT).reduce(
      (acc, rank) => ({
        ...acc,
        [rank]: COMMON.zero,
      }),
      {},
    );
  }

  getLottoRank(includesCount, hasBonusNumber) {
    const [first, second, third, fourth, fifth] = Object.keys(LOTTO_RESULT);

    if (LOTTO_RESULT[fifth].includesCount === includesCount) return fifth;

    if (LOTTO_RESULT[fourth].includesCount === includesCount) return fourth;

    if (LOTTO_RESULT[second].includesCount === includesCount) {
      if (hasBonusNumber) return second;

      return third;
    }

    if (LOTTO_RESULT[first].includesCount === includesCount) return first;
  }

  getLottosRanks() {
    return this.#lottos
      .map((lotto) => {
        const includesCount = this.#lottoCompare.getCountIncludesWinningNumbers(lotto);
        const hasBonusNumber = this.#lottoCompare.hasBonusNumber(lotto);

        return this.getLottoRank(includesCount, hasBonusNumber);
      })
      .filter((lottoRank) => lottoRank);
  }

  getLottosResultsCount() {
    const lottosRanks = this.getLottosRanks();

    lottosRanks.forEach((lottoRank) => {
      this.#initialLottoResults[lottoRank] += LOTTO.increaseRankCount;
    });

    return this.#initialLottoResults;
  }
}

export default LottosResults;
