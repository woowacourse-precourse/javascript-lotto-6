import LottoController from './controllers/LottoController.js';

class App {
  constructor() {
    this.LOTTO_PLAY = new LottoController();
  }

  async play() {
    await this.LOTTO_PLAY.inputPurchaseMoney();
  }
}

export default App;
