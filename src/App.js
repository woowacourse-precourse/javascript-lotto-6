import LottoController from './LottoController.js';
import View from './views/view.js';
import LottoService from './service/LottoService.js';
import PrizeService from './service/PrizeService.js';

class App {
  #controller;

  #view;

  constructor() {
    this.#controller = new LottoController({
      view: new View(),
      lottoService: new LottoService(),
      prizeService: new PrizeService(),
    });
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
