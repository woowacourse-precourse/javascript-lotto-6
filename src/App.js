import LottoGameController from './controllers/LottoGameController.js';
import LottoGame from './domain/LottoGame.js';
import LottoValidator from './domain/LottoValidator.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoGameController(
      new LottoGame(),
      new LottoValidator(),
      new InputView(),
      new OutputView()
    );
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
