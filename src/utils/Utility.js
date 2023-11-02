import LottoPurchased from "./LottoPurchased.js";
import WinningLotto from "./WinningLotto.js";

class Utility {
  constructor() {
    this.lottoPurchased = new LottoPurchased();
    this.winningLotto = new WinningLotto();
  }

  getPurchaseQuantity() {
    return this.lottoPurchased.getPurchaseQuantity();
  }

  getLottoNumber(quantity, min, max, count) {
    return this.lottoPurchased.getLottoNumbers(quantity, min, max, count);
  }
  getWinningLotto() {
    return this.winningLotto.getWinningLotto();
  }
  compareNumbers(myLottos, winningArr) {
    return this.winningLotto.compareNumbers(myLottos, winningArr);
  }
  statisticsOfWinningLotto(places) {
    return this.winningLotto.statisticsOfWinningLotto(places);
  }
}
export default Utility;
