import {
  countResults,
  getValidPurchaseAmount,
  getWinningNumbersAndBonus,
  printStatistics,
  purchaseLottos,
} from "./LottoUtils.js";
import * as CONSTANTS from "./Constants.js";

class App {
  constructor() {
    this.purchaseAmount = 0;
    this.lottos = [];
    this.winningResult = { winningNums: [], bonusNum: 0 };
    this.statistics = {
      first_prize: 0,
      second_prize: 0,
      third_prize: 0,
      fourth_prize: 0,
      fifth_prize: 0,
      totalPrice: 0,
    };
  }
  async play() {
    this.purchaseAmount = await getValidPurchaseAmount();
    const lottoCnt = this.purchaseAmount / CONSTANTS.LOTTO_TICKET_PRICE;
    this.lottos = purchaseLottos(lottoCnt);
    this.winningResult = await getWinningNumbersAndBonus();
    this.statistics = countResults(
      this.lottos,
      this.winningResult.winningNums,
      this.winningResult.bonusNum,
      this.statistics
    );
    printStatistics(this.purchaseAmount, this.statistics);
  }
}

export default App;
