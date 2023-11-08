import LottoController from './constroller/LottoController';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.playGame();
  }
}

export default App;
