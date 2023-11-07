import PurchaseAmount from '../PurchaseAmount.js';
import LottoGenerator from './LottoGenerator.js';

class LottoModel {
  #userLottos;

  static LOTTO_PRIZE = {
    '1등': 2_000_000_000,
    '2등': 30_000_000,
    '3등': 1_500_000,
    '4등': 50_000,
    '5등': 5_000,
    꽝: 0,
  };

  generateLotto(purchaseAmount) {
    const count = PurchaseAmount.of(purchaseAmount).getLottoCount();
    const lottos = LottoGenerator.run(count);
    this.#userLottos = lottos;

    return lottos;
  }

  getWinningStatistics(winningNumbers, bonus) {
    const lottoResult = this.#userLottos.map((userLotto) =>
      winningNumbers.compareWinningNumbers(userLotto, bonus.getBonusNumber()),
    );
    const ranks = LottoModel.#calculateRanks(lottoResult);
    const rateOfReturn = this.#calculateRateOfReturn(ranks);

    return { ranks, rateOfReturn };
  }

  static #calculateRanks(lottoResult) {
    return lottoResult.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);

      return acc;
    }, new Map());
  }

  #calculateRateOfReturn(result) {
    let rateOfReturn = 0;

    result.forEach((count, rank) => {
      rateOfReturn += LottoModel.LOTTO_PRIZE[rank] * count;
    });

    return (rateOfReturn / (this.#userLottos.length * 1000)) * 100;
  }
}

export default LottoModel;
