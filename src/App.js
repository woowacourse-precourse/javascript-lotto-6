import LottoGame from "./Module/LottoGame";

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    await this.#lottoGame.start();
  }
}

export default App;
