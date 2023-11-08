import LotteryCalculator from "./LotteryCalculator.js";
import LottoGame from "./game/LottoGame.js";
import Validator from "./utils/Validator.js";
import Input from "./utils/Input.js";
import Output from "./utils/Output.js";

class App {
  async play() {
    const purchaseAmount = await this.#getValidatedPurchaseAmout();
    const lottoGame = new LottoGame(purchaseAmount);

    lottoGame.createLottos();
    this.printPurchaseComplete(lottoGame);

    const winningNumber = await this.#getValidatedWinningNumber();
    const bonusNumber = await this.#getValidatedBonusNumber(winningNumber);
    lottoGame.calculateResult(winningNumber, bonusNumber);
    const results = lottoGame.results;

    const totalPrize = LotteryCalculator.totalPrize(results);
    const profit = LotteryCalculator.profit(totalPrize, purchaseAmount);
    this.printLottoGameResult(results, profit);
  }

  async #getValidatedPurchaseAmout() {
    try {
      const purchaseAmount = await Input.purchase();
      Validator.purchase(purchaseAmount);
      return purchaseAmount;
    } catch (e) {
      Output.printError(e.message);
      return this.#getValidatedPurchaseAmout();
    }
  }

  async #getValidatedWinningNumber() {
    try {
      const winningNumber = await Input.winningNumber();
      Validator.winningNumbers(winningNumber);
      return winningNumber;
    } catch (e) {
      Output.printError(e.message);
      return this.#getValidatedWinningNumber();
    }
  }

  async #getValidatedBonusNumber(winningNumber) {
    try {
      const bonusNumber = await Input.bonusNumber();
      Validator.bonusNumber(winningNumber, bonusNumber);
      return bonusNumber;
    } catch (e) {
      Output.printError(e.message);
      return this.#getValidatedBonusNumber(winningNumber);
    }
  }

  printPurchaseComplete(lottoGame) {
    Output.printCountOfLotto(lottoGame.countOfLotto);
    Output.printLotto(lottoGame.lottos);
  }

  printLottoGameResult(results, profit) {
    Output.printResult(results);
    Output.printProfit(profit);
  }
}

export default App;
