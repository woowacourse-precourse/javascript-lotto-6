import LottoController from "./LottoController.js";

class App {
  constructor() {
    this.lottoController = new LottoController;
  }
  async play() {
    await this.lottoController.sellLotto();
    await this.lottoController.winningCalculation();
    this.lottoController.lottoResult();
  }
}

export default App;
