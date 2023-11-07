import OutputManager from "./functions/OutputManager.js";
import ValidateManager from "./functions/ValidateManager.js";
import LottoGameManager from "./functions/LottoGameManager.js";
class App {
  constructor() {
    this.outputManager = new OutputManager();
    this.validateManager = new ValidateManager();
    this.lottoGameManager = new LottoGameManager();
  }

  async play() {
    try {
      const [moneyForLotto, purchasedLotto] =
        await this.lottoGameManager.purchaseLotto();
      const winningBalls = await this.lottoGameManager.setWinningNumbers();
      const bonusBall = await this.lottoGameManager.setBonusNumber(
        winningBalls
      );

      const [rankCounts, winningPrizeSum] =
        this.lottoGameManager.checkIsWinning(
          purchasedLotto,
          winningBalls,
          bonusBall
        );

      this.lottoGameManager.showResult(
        moneyForLotto,
        winningPrizeSum,
        rankCounts
      );
    } catch (error) {
      this.outputManager.showError(error.message);
    }
  }
}

export default App;
