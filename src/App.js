import LottoController from './controller/LottoController';

class App {
  #lottoController;

  constructor() {
    this.#lottoController = new LottoController();
  }

  async play() {
    await this.#lottoController.gameStart();
  }
}

export default App;
