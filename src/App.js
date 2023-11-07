import LottoController from './LottoController';
import View from './views/view';
import LottoService from './LottoService';

class App {
  #controller;

  #view;

  constructor() {
    this.#controller = new LottoController({
      view: new View(),
      lottoService: new LottoService(),
    });
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
