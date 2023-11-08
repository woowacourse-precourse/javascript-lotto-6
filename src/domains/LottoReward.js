import { GRADE, PIRZE } from '../constants/lotto.js';
import paramType from '../lib/paramType/src/paramType.js';
import roundNumber from '../utils/roundNumber.js';

export default class LottoReward {
  #drawResult;
  #purchasePrice;
  DECIMAL_PLACES = 1;

  static GRADE_PRIZE = Object.freeze({
    [GRADE.FIRST]: PIRZE.FIRST,
    [GRADE.SECOND]: PIRZE.SECOND,
    [GRADE.THIRD]: PIRZE.THIRD,
    [GRADE.FOURTH]: PIRZE.FOURTH,
    [GRADE.FIFTH]: PIRZE.FIFTH,
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
    const profitRate = roundNumber(profit * 100, this.DECIMAL_PLACES);

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
