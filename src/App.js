import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }
  async play() {
    await this.lottoController.purchaseLottos();
    await this.lottoController.viewResults();
  }
}

export default App;
