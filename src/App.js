import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.LottoController = new LottoController();
  }

  async play() {
    await this.LottoController.playLotto();
  }
}

export default App;
