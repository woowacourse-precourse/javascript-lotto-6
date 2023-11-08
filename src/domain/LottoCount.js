import STATIC_NUMBER from "../constant/StaticNumber";
import WINNING_REWARD from "./WinningReward";

class LottoCount {
  #lottoCount;
  #revenue;

  constructor(inputPurchaseAmount) {
    this.#lottoCount =
      Number(inputPurchaseAmount) / STATIC_NUMBER.PURCHASE_AMOUNT_SPLIT;
    this.#revenue = 0;
  }

  getLottoCount() {
    return this.#lottoCount;
  }

  getRevenueRate(winningStatistic) {
    const purchasePrice =
      this.#lottoCount * STATIC_NUMBER.PURCHASE_AMOUNT_SPLIT;
    winningStatistic.forEach((count, index) => {
      this.#revenue += WINNING_REWARD[index] * count;
    });

    return ((this.#revenue / purchasePrice) * STATIC_NUMBER.PERCENT).toFixed(1);
  }
}

export default LottoCount;
