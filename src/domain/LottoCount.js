class LottoCount {
  #lottoCount;

  constructor(inputPurchaseAmount) {
    this.#lottoCount = Number(inputPurchaseAmount) / 1000;
  }

  getAmount() {
    return this.#lottoCount;
  }
}

export default LottoCount;
