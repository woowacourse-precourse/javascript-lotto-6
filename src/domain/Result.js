import { LOTTO_RANK, LOTTO, PROFIT_RATE } from '../utils/constants/constants';
import Rank from './Rank';

class Result {
  #result;

  constructor() {
    this.#result = new Map();

    Object.keys(LOTTO_RANK).forEach((rank) => {
      this.#result.set(new Rank(rank), 0);
    });
  }

  calculateResult(lottos, winningLotto) {
    const winningLottoNumbers = winningLotto.getNumbers();
    const winningLottoBonusNumber = winningLotto.getBonusNumber();

    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const matchRank = this.#findMatchRank(lottoNumbers, winningLottoNumbers, winningLottoBonusNumber);

      if (matchRank) {
        this.#result.set(matchRank, this.#result.get(matchRank) + 1);
      }
    });
  }

  #findMatchRank(lottoNumbers, winningLottoNumbers, winningLottoBonusNumber) {
    const matchCount = lottoNumbers.filter((number) => winningLottoNumbers.includes(number)).length;
    const isMatchBonus = lottoNumbers.includes(winningLottoBonusNumber);

    const matchRank = [...this.#result.keys()].find(
      (rank) => rank.getMatchCount() === matchCount && rank.getIsMatchBonus() === isMatchBonus,
    );

    return matchRank;
  }

  getResult() {
    return this.#result;
  }

  getProfitRate(lottosCount) {
    const lottosPrice = lottosCount * LOTTO.price;

    const totalPrize = [...this.#result.entries()].reduce((acc, [rank, lottoCount]) => {
      return acc + rank.getPrize() * lottoCount;
    }, 0);

    return (totalPrize / lottosPrice) * 100;
  }
}

export default Result;
