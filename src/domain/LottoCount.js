import STATIC_NUMBER from "../constant/StaticNumber";

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
    const purchasePrice = this.#lottoCount * 1000;
    winningStatistic.forEach((count, index) => {
      this.#revenue +=
        [2_000_000_000, 30_000_000, 1_500_000, 50_000, 5_000][index] * count;
    });

    return ((this.#revenue / purchasePrice) * 100).toFixed(1);
  }
}

export default LottoCount;
