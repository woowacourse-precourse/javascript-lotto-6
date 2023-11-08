import STATIC_NUMBER from "../constant/StaticNumber";

class LottoCount {
  #lottoCount;

  constructor(inputPurchaseAmount) {
    this.#lottoCount =
      Number(inputPurchaseAmount) / STATIC_NUMBER.PURCHASE_AMOUNT_Split;
  }

  getLottoCount() {
    return this.#lottoCount;
  }
}

export default LottoCount;
