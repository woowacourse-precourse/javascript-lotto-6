import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.handleBuyLottos();
    await this.lottoController.handleCreateWinResult();
    await this.lottoController.handleLottoResult();
  }
}

const app = new App();
app.play();
export default App;
