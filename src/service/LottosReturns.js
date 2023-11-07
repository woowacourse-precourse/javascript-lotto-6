import { LOTTO_RESULT, LOTTO } from '../constants/lotto';

class LottosRetruns {
  #lottosResult;

  constructor(lottosResult) {
    this.#lottosResult = lottosResult;
  }

  #getTotalPrize() {
    const ranks = Object.keys(LOTTO_RESULT);

    return ranks.reduce((acc, cur) => acc + this.#lottosResult[cur] * LOTTO_RESULT[cur].prize, 0);
  }

  getLottosReturns(purchasePrice) {
    const totalPrize = this.#getTotalPrize();
    const lottonReturns = (totalPrize / purchasePrice) * LOTTO.percentage;

    return utils.roundingSecondDecimalPlace(lottonReturns);
  }
}

export default LottosRetruns;
