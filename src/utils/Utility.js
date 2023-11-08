import LottoPurchased from "./LottoPurchased.js";
import WinningLotto from "./WinningLotto.js";
import Statistics from "./Statistics.js";

class Utility {
  constructor() {
    this.lottoPurchased = new LottoPurchased();
    this.winningLotto = new WinningLotto();
    this.statistics = new Statistics();
  }

  getPurchaseQuantity() {
    return this.lottoPurchased.getPurchaseQuantity();
  }

  getLottoNumbers(quantity, min, max, count) {
    return this.lottoPurchased.getLottoNumbers(quantity, min, max, count);
  }
  getWinningLotto() {
    return this.winningLotto.getWinningLotto();
  }
  getBonusLotto(mainLottoArr) {
    return this.winningLotto.getBonusLotto(mainLottoArr);
  }
  compareNumbers(myLottos, winningArr) {
    return this.winningLotto.compareNumbers(myLottos, winningArr);
  }
  statisticsOfWinningLotto(sameNumbers) {
    return this.statistics.statisticsOfWinningLotto(sameNumbers);
  }
  rateOfReturn(places, purchaseQuantity) {
    return this.statistics.rateOfReturn(places, purchaseQuantity);
  }
  moneyForPlace(placeIndex) {
    return this.statistics.moneyForPlace(placeIndex);
  }
}
export default Utility;
