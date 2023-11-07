import { LOTTO_RESULT } from '../constants/lotto.js';
import LottoCompare from './LottoCompare.js';

class LottosResults {
  #lottoCompare;
  #lottos;
  #initialResults;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#lottoCompare = new LottoCompare(winningNumbers, bonusNumber);
    this.#initialResults = this.#getInitialResults();
  }

  #getInitialResults() {
    return Object.keys(LOTTO_RESULT).reduce(
      (acc, key) => ({
        ...acc,
        [key]: 0,
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
      this.#initialResults[lottoRank] += 1;
    });

    return this.#initialResults;
  }
}

export default LottosResults;
