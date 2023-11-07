import LottoManager from "./LottoManager.js";
import User from "./User.js";

class App {
  constructor() {
    this.user = new User();
    this.lottoManager = new LottoManager();
    this.lottoManager.setUser(this.user);
  }

  async play() {
    await this.user.buyLotto();

    this.lottoManager.calculateLottoCount();
    this.lottoManager.publishLotto();
    this.lottoManager.printPublishedLotto();

    await this.lottoManager.setWinningNumbersAndBonus();

    this.lottoManager.checkTotalResult();
    this.lottoManager.printTotalResult();
  }
}

export default App;
