class LottoCount {
    #lottoCount;
  
    constructor(inputPurchaseAmount) {
      this.#lottoCount = Number(inputPurchaseAmount) / 1000;
    }
  
    getLottoCount() {
      return this.#lottoCount;
    }
  }
  
  export default LottoCount;