import LottoController from './services/Controller';

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
