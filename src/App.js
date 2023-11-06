import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.lotto = new LottoController();
  }

  async play() {
    await this.lotto.start();
  }
}

export default App;
