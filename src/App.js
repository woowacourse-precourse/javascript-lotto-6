import LottoController from './controller/LottoController';

class App {
  #lottoController;

  async play() {
    this.#lottoController = new LottoController();
    await this.#lottoController.play();
  }
}

export default App;
