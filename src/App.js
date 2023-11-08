import LottoResult from "./LottoResult.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  constructor() {
    this.lottoResult = new LottoResult();
  }

  async play() {
    await this.inputMoney();
  }

  async inputMoney() {
    try {
      const answer = await InputView.readMoney();
      await this.buyLotto(answer);
    } catch (e) {
      OutputView.printError(e);
      await this.inputMoney();
    }
  }
}
