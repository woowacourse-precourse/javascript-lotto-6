import LottoController from './controller/LottoController.js';

class App {
  #controller;

  async play() {
    this.#controller = new LottoController();
    await this.#controller.getPurchaseAmount();
  }
}

export default App;
