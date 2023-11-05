import PurchaseAmount from '../PurchaseAmount.js';
import LottoNumberGenerator from './LottoNumberGenerator.js';

class LottoModel {
  #userLottos;

  static WINNING_RANK = {
    3: 5_000,
    4: 50_000,
    5: 1_500_000,
    7: 30_000_000,
    6: 2_000_000_000,
  };

  generateLotto(input) {
    const lottoCount = PurchaseAmount.of(input).getLottoCount();
    const lottos = LottoNumberGenerator.run(lottoCount);
    this.#userLottos = lottos;

    return lottos;
  }

  getResult(winning, bonus) {
    return this.#userLottos.map((userLotto) =>
      winning.calculateResult(userLotto, bonus.getBonusNumber()),
    );
  }

  calculateResult(result) {
    const profit = result.reduce((acc, cur) => {
      if (cur < 3) return acc;

      return acc + LottoModel.WINNING_RANK[cur];
    }, 0);

    return { result, profitability: (profit / (this.#userLottos.length * 1000)) * 100 };
  }
}

export default LottoModel;
