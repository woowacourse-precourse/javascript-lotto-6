import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
class App {
  #lottos;

  async buyLotto() {
    const money = await InputView.getUserPurchaseAmout();
    this.#lottos = Lotto.buyLottoTickets(money);
    OutputView.printPurchaseAmout(this.#lottos.length);
    this.#lottos.forEach((lotto) => MissionUtils.Console.print(lotto.toPrintableString()));
  }

  async play() {
    await this.buyLotto();
  }
}

export default App;
