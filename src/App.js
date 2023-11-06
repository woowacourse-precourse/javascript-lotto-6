import LottoController from "./controller/LottoController.js";

class App {

  #lottoController;

  constructor() {
    this.#lottoController = new LottoController()
  }
  async play() {
    await this.#lottoController.run();
  }
}

export default App;
