import LottoController from '../controller/LottoController.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import TotalPrice from '../model/TotalPrice.js';

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
