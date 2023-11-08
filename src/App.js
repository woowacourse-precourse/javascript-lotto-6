import WinnigStatistics from "./WinnigStatistics.js";
import LotteDrawing from "./LottoDrawing.js";
import LottoStore from "./LottoStore.js";
import Buyer from "./Buyer.js";

class App {
  async play() {}
  constructor() {
    this.buyer = new Buyer();
    this.lottostore = new LottoStore();
    this.lottoDrawing = new LotteDrawing();
  }

  async buyLotto() {
    const money = await this.buyer.inputMoney();
    const lottos = this.lottostore.sellLotto(money);
    this.lottostore.printLottos(lottos);
    this.buyer.setLottos(lottos);
  }

  async drawLotto() {
    await this.lottoDrawing.inputWinningLotto();
    await this.lottoDrawing.inputBonusNumber();
  }
  async play() {
    await this.buyLotto();
    await this.drawLotto();
  }
}

export default App;
