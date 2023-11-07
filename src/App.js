import LottoGameController from './Controller/LottoGameController.js';
import View from './View/View.js';
import LottoService from './services/LottoService.js';
import PrizeService from './services/PrizeService.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoGameController({
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
