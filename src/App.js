import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.controller = new LottoController();
  }

  async play() {
    await this.controller.getInputAndPrintLotto();
    this.controller.computeAndPrintWins();
  }
}

export default App;
