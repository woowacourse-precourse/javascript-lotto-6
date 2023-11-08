import PurchaseAmount from '../PurchaseAmount.js';
import { LOTTO } from '../constants/System.js';
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
    const lottoResult = this.#checkLottoResult(winningNumbers, bonus);
    const ranks = LottoModel.#calculateRanks(lottoResult);
    const rateOfReturn = this.#calculateRateOfReturn(ranks);

    return { ranks, rateOfReturn };
  }

  #checkLottoResult(winningNumbers, bonus) {
    return this.#userLottos.map((userLotto) =>
      winningNumbers.compareWinningNumbers(userLotto, bonus.getBonusNumber()),
    );
  }

  static #calculateRanks(lottoResult) {
    return lottoResult.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);

      return acc;
    }, new Map());
  }

  #calculateRateOfReturn(ranks) {
    const totalPrizeMoney = LottoModel.#calculateTotalPrizeMoney(ranks);

    return (totalPrizeMoney / (this.#userLottos.length * LOTTO.price)) * 100;
  }

  static #calculateTotalPrizeMoney(ranks) {
    let totalPrizeMoney = 0;

    ranks.forEach((count, rank) => {
      totalPrizeMoney += LottoModel.LOTTO_PRIZE[rank] * count;
    });

    return totalPrizeMoney;
  }
}

export default LottoModel;
