import LottoGameController from './controllers/LottoGameController.js';

class App {
  #controller;

  constructor() {
    this.#controller = new LottoGameController();
  }

  async play() {
    this.#controller.start();
  }
}

export default App;
