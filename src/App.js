import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import WinningNumbers from "./domains/WinningNumbers.js";
import Result from "./domains/Result.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  #lottos;
  #winningNumbers;

  constructor() {
    this.InputView = new InputView();
    this.OutputView = new OutputView();
  }

  async getLotto() {
    const money = await this.InputView.getPurchaseAmout();
    this.#lottos = Lotto.purchaseLotto(money);
    this.OutputView.printPurchaseAmout(this.#lottos);
  }

  async getWinningNumbers() {
    try {
      const numbers = await this.InputView.getWinningNumbers();
      const lotto = new Lotto(numbers);

      const bonusNumber = await this.InputView.getBonusNumber();
      this.#winningNumbers = new WinningNumbers(lotto, bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.getWinningNumbers();
    }
  }

  getResults() {
    const resultCalculator = new Result(this.#lottos, this.#winningNumbers);
    const { results, roi } = resultCalculator.getResults();
    this.OutputView.printResults(results, roi);
  }

  async play() {
    await this.getLotto();
    await this.getWinningNumbers();
    this.getResults();
  }
}

export default App;
