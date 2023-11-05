import LottoController from "./Controller/LottoController.js";

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.startLotto();
  }

  async startLotto() {
    this.lottoController.handlePurchase();

  }
}

export default App;
