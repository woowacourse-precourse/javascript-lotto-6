import LottoGameController from './controller/LottoGameController.js';

class App {
  #lottoGameController = new LottoGameController();
  async play() {
    await this.#lottoGameController.run();
  }
}

export default App;
