import LottoController from './Controller/LottoController.js';

class App {
  constructor() {
    this.lottoController = new LottoController();
  }

  async play() {
    await this.lottoController.startGame();
  }
}

export default App;
