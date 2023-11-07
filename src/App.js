import LottoGameController from "./controller/LottoGameController.js";

class App {

  /** @type {LottoGameController} */
  #gameController = null;

  constructor() {
    this.#gameController = new LottoGameController();
  }

  async play() {
    
  }
}

export default App;
