import LottoController from './controller/LottoController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoController();
  }

  async play() {
    await this.#controller.play();
  }
}

export default App;
