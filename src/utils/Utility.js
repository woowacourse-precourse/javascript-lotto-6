import LottoPurchased from "./LottoPurchased.js";

class Utility {
  constructor() {
    this.lottoPurchased = new LottoPurchased();
  }

  getPurchaseQuantity() {
    return this.lottoPurchased.getPurchaseQuantity();
  }

  getLottoNumber(quantity, min, max, count) {
    return this.lottoPurchased.getLottoNumbers(quantity, min, max, count);
  }
}
export default Utility;
