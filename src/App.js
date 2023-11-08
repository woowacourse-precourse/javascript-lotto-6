import InputHandler from "./InputHandler.js";
import OutputHandler from "./OutputHandler.js";
import LottoPurchase from "./LottoPurchase.js";
import LottoStatistics from "./LottoStatistics.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.lottoPurchase = null;
    this.lottoStatistics = null;
    this.purchasedLottos = [];
  }

  async play() {
    try {
      await this.handlePurchase();
      await this.handleWinningNumbersInput();
      this.handleStatistics();
      this.handleProfitRateOutput();
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    }
  }

  async handlePurchase() {
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    this.lottoPurchase = new LottoPurchase(purchaseAmount);
    this.lottoPurchase.purchase();
    this.purchasedLottos = this.lottoPurchase.getLottos();
    OutputHandler.numberOfLottoPurchase(this.purchasedLottos);
  }

  async handleWinningNumbersInput() {
    const winningNumbers = await InputHandler.getWinningNumbers();
    const bonusNumber = await InputHandler.getBonusNumbers(winningNumbers);
    this.lottoStatistics = new LottoStatistics(winningNumbers, bonusNumber, Lotto.PRICE);
  }

  handleStatistics() {
    this.lottoStatistics.calculate(this.purchasedLottos);
    const statistics = this.lottoStatistics.getStatistics();
    OutputHandler.winningStatistics(statistics);
  }

  handleProfitRateOutput() {
    const profitRate = this.lottoStatistics.calculateProfitRate(this.purchasedLottos);
    OutputHandler.totalProfitRate(profitRate);
  }
}

export default App;
