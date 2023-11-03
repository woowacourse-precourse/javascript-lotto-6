import Lotto from "./Lotto.js";
import InputView from "./view/InputView.js";
class App {
  #lottos;

  async buyLotto() {
    const money = await InputView.getUserPurchaseAmout();
    this.#lottos = Lotto.buyLottoTickets(money);
  }

  async play() {
    await this.buyLotto();
  }
}

export default App;
