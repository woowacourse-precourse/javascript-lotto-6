import LottoController from './controllers/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.inputPurchaseAmount();
  }
}

export default App;
