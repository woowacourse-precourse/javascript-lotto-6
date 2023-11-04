import LottoGame from './controller/LottoGame.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    this.#lottoGame.start();
    await this.#lottoGame.inputPurchaseAmount();
    this.#lottoGame.issueLottoTickets();
  }
}

export default App;
