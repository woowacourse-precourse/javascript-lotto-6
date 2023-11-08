import WinnigStatistics from "./WinnigStatistics.js";
import LotteDrawing from "./LottoDrawing.js";
import LottoStore from "./LottoStore.js";
import Buyer from "./Buyer.js";

class App {
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

  async printResult() {
    const buyerLottos = this.buyer.getLottos();
    const winningLotto = this.lottoDrawing.getWinningLotto();
    const bonusNumber = this.lottoDrawing.getBonusNumber();

    this.winnigStatistics = new WinnigStatistics(
      buyerLottos,
      winningLotto,
      bonusNumber
    );

    this.winnigStatistics.printResult();
    this.winnigStatistics.calculrateMargin(this.buyer.getPurchaseMoney());
  }

  async play() {
    await this.buyLotto();
    await this.drawLotto();
    this.printResult();
  }
}

export default App;
