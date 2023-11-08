import LottoGameController from "./controller/LottoGameController.js";

class App {

  /** @type {LottoGameController} */
  #gameController = null;

  constructor() {
    this.#gameController = new LottoGameController();
  }

  async play() {
    await this.#gameController.handlePurchaseTickets();
    await this.#gameController.handleSetWinningNumbers();
    this.#gameController.handleGameResult();
  }
}

export default App;
