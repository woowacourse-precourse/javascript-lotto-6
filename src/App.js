import LottoController from './controllers/LottoController.js';

class App {
  lottoController;

  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.startLotto();
    this.lottoController.printPurchaseHistory();

    await this.lottoController.setWinningNumbers();
    this.lottoController.compareLottoNumbers();

    this.lottoController.printWinningResult();
    this.lottoController.printTotalProfit();
  }
}

export default App;
