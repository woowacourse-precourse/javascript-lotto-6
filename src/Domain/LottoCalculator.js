import Lotto from '../Lotto';
import { LOTTO_INFO } from '../Utils/constants';

class LottoCalculator extends Lotto {
  calculateResult(lottos) {
    const prizeResultMap = new Map();
    lottos.forEach((lotto) => {
      const prize = lotto.calculatePrize(this);
      prizeResultMap.set(prize, (prizeResultMap.get(prize) || 0) + 1);
    });

    const profits = Array.from(prizeResultMap.entries())
      .map(([prize, count]) => LOTTO_INFO.PRIZE[prize] * count)
      .reduce((a, b) => a + b);
    const lottoSize = Array.from(prizeResultMap.values()).reduce(
      (a, b) => a + b,
    );
    const earningRate = (profits / (lottoSize * LOTTO_INFO.PRICE)) * 100;
    return { prizeResultMap, earningRate };
  }
}

export default LottoCalculator;
