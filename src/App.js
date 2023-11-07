import LottoController from '../controller/LottoController.js';

class App {
  constructor() {
    this.controller = new LottoController();
  }

  async play() {
    await this.controller.startLottery();
    this.controller.computeAndPrintWins();
  }
}

export default App;
