import { COMMON } from '../constants/common.js';
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
      (acc, rank) => acc + this.#lottosResultsCount[rank] * LOTTO_RESULT[rank].prize,
      COMMON.zero,
    );
  }

  getLottosReturns(purchasePrice) {
    const totalPrize = this.getTotalPrize();
    const lottonReturns = (totalPrize / purchasePrice) * LOTTO.percentage;

    return utils.roundingSecondDecimalPlace(lottonReturns);
  }
}

export default LottosRetruns;
