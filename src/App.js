import LottoController from "./Controller/LottoController.js";

class App {
  #gameStart;

  constructor() {
    this.#gameStart = new LottoController();
  }
  async play() {
    await this.#gameStart.start();
  }
}

export default App;
