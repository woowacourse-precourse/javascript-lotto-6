import LottoGameController from "./controller/LottoGameController.js";

class App {
  #LottoGame;

  constructor() {
    this.#LottoGame = new LottoGameController();
  }

  async play() {
    await this.#LottoGame.startGame();
  }
}

export default App;
