import LottoGameController from "./controller/LottoGameController.js";

class App {
  #LottoGame = new LottoGameController();
  constructor() {}

  async play() {
    await this.#LottoGame.startGame();
  }
}

export default App;
