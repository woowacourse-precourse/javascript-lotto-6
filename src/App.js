import LottoController from "../src/controller/LottoController.js";
class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoController();
  }

  async play() {
    await this.#lottoGame.playGame();
  }
}

export default App;
