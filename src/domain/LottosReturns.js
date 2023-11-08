import { LOTTO_RESULT, LOTTO } from '../constants/lotto.js';
import { utils } from '../utils/utils.js';

class LottosRetruns {
  #lottosResultsCount;

  constructor(lottosResultsCount) {
    this.#lottosResultsCount = lottosResultsCount;
  }

  getTotalPrize() {
    const ranks = Object.keys(LOTTO_RESULT);

    return ranks.reduce(
      (acc, cur) => acc + this.#lottosResultsCount[cur] * LOTTO_RESULT[cur].prize,
      0,
    );
  }

  getLottosReturns(purchasePrice) {
    const totalPrize = this.getTotalPrize();
    const lottonReturns = (totalPrize / purchasePrice) * LOTTO.percentage;

    return utils.roundingSecondDecimalPlace(lottonReturns);
  }
}

export default LottosRetruns;
