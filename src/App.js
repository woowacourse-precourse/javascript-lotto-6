import LottoController from "./controller/LottoController";
import LottoHandler from "./lottoHandler/LottoHandler";
import View from "./view/View";

class App {
  #controller;

  constructor() {
    this.#controller = new LottoController({
      view: new View(),
      lottoHandler: new LottoHandler(),
    });
  }

  async play() {
    await this.#controller.startLotto();
  }
}

export default App;