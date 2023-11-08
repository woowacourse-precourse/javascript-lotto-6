import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    this.lottoController.handleBuyLottos();
  }
}

const app = new App();
app.play();
export default App;
