import LottoController from './controllers/LottoController.js';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }

  async play() {
    await this.#lottoController.play();
  }
}

export default App;
