import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import WinningRate from "./domains/WinningRate.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  #lottos;
  #winningRate;

  async buyLotto() {
    const money = await InputView.getUserPurchaseAmout();
    this.#lottos = Lotto.buyLottoTickets(money);
    OutputView.printPurchaseAmout(this.#lottos.length);
    this.#lottos.forEach((lotto) => MissionUtils.Console.print(lotto.toPrintableString()));
  }

  async getWinningNumber() {
    const winningNumbers = await InputView.getWinningNumbers();
    const bonusNumber = await InputView.getBonusNumbers();
    const lotto = Lotto.toArray(winningNumbers);
    this.#winningRate = new WinningRate(lotto, bonusNumber);
  }

  async play() {
    await this.buyLotto();
    await this.getWinningNumber();
  }
}

export default App;
