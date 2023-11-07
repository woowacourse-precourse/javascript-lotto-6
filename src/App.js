import LottoController from './controller/LottoController.js';

class App {
  #lottoController = new LottoController();

  async play() {
    await this.#lottoController.gameStart();
  }
}

export default App;
