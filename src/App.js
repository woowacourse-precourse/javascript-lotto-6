import LottoGame from './controller/LottoGame.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    this.#lottoGame.start();
    const amount = await this.#lottoGame.inputPurchaseAmount();
  }
}

export default App;
