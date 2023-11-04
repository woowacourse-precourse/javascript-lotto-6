import LottoController from './controller/index.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoController();
  }

  async play() {
    await this.#controller.startGame();
  }
}

export default App;
