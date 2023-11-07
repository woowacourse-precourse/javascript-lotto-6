import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import WinningRate from "./domains/WinningRate.js";
import Result from "./domains/Result.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  #lottos;
  #winningRate;

  async buyLotto() {
    const money = await InputView.getUserPurchaseAmout();
    this.#lottos = Lotto.buyLottoTickets(money);
    OutputView.printPurchaseAmout(this.#lottos);
  }

  async getWinningNumber() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      const lotto = new Lotto(winningNumbers);

      const bonusNumber = await InputView.getBonusNumbers();
      this.#winningRate = new WinningRate(lotto, bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.getWinningNumber();
    }
  }

  result() {
    const resultCalculator = new Result(this.#lottos, this.#winningRate);
    const { results, roi } = resultCalculator.calcResults();
    OutputView.printResults(results, roi);
  }

  async play() {
    await this.buyLotto();
    await this.getWinningNumber();
    this.result();
  }
}

export default App;
