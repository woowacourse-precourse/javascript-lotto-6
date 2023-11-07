import LottoController from './LottoController.js';

class App {
  #lottoController = new LottoController();

  async play() {
    await this.#lottoController.run();
  }
}

export default App;
