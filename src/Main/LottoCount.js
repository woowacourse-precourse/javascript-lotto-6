import STATIC_NUMBER from "../Constant/StaticNumber";

class LottoCount {
    #lottoCount;
  
    constructor(inputPurchaseAmount) {
      this.#lottoCount = Number(inputPurchaseAmount) / STATIC_NUMBER.PURCHASE_AMOUNT_SPLIT;
    }
  
    getLottoCount() {
      return this.#lottoCount;
    }
  }
  
  export default LottoCount;