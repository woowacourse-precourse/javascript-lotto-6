import paramType from '../lib/paramType/src/paramType.js';

export default class LottoReward {
  #drawResult;
  #purchasePrice;

  static GRADE_PRIZE = Object.freeze({
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  });

  constructor(
    drawResult,
    purchasePrice,
    _ = paramType(drawResult, Object),
    _1 = paramType(purchasePrice, 'number'),
  ) {
    this.#drawResult = drawResult;
    this.#purchasePrice = purchasePrice;
  }

  calculrateProfitRate() {
    const totalPrize = this.#calculateTotalPrize();
    const profit = totalPrize / this.#purchasePrice;
    const profitRate = (profit * 100).toFixed(1);

    return profitRate;
  }

  #calculateTotalPrize() {
    const totalPrize = Object.entries(this.#drawResult).reduce(
      (totalPrize, [grade, count]) => {
        const prize = LottoReward.GRADE_PRIZE[grade];
        return totalPrize + prize * count;
      },
      0,
    );

    return totalPrize;
  }
}
