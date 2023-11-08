import Lotto from '../Lotto';
import { LOTTO_INFO } from '../Utils/constants';

class LottoCalculator extends Lotto {
  #bonus;

  calculateResult(lottos) {
    const prizeResultMap = this.calculatePrizeResultMap(lottos);
    const profits = this.calculateProfits(prizeResultMap);
    const lottoSize = this.calculateLottoSize(prizeResultMap);
    const earningRate = this.calculateEarningRate(profits, lottoSize);
    return { prizeResultMap, earningRate };
  }

  calculatePrizeResultMap(lottos) {
    const prizeResultMap = new Map();
    lottos.forEach(lotto => {
      const prize = lotto.calculatePrize(this);
      prizeResultMap.set(prize, (prizeResultMap.get(prize) || 0) + 1);
    });
    return prizeResultMap;
  }

  calculateProfits(prizeResultMap) {
    return Array.from(prizeResultMap.entries())
      .map(([prize, count]) => LOTTO_INFO.PRIZE[prize] * count)
      .reduce((a, b) => a + b);
  }

  calculateLottoSize(prizeResultMap) {
    return Array.from(prizeResultMap.values()).reduce((a, b) => a + b);
  }

  calculateEarningRate(profits, lottoSize) {
    return (profits / (lottoSize * LOTTO_INFO.PRICE)) * 100;
  }

  set bonus(bonus) {
    this.#bonus = bonus;
  }

  get bonus() {
    return this.#bonus;
  }
}

export default LottoCalculator;
