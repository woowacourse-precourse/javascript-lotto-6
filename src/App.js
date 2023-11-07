import LottoGameController from './controllers/LottoGameController.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoGameController(new InputView(), new OutputView());
  }

  async play() {
    await this.#controller.start();
  }
}

export default App;
