import LottoGameController from './Controller/LottoGameController.js';
import View from './View/View.js';
import LottoService from './services/LottoService.js';

class App {
  #controller;

  #view;

  constructor() {
    this.#controller = new LottoGameController({
      view: new View(),
      lottoService: new LottoService(),
    });
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
