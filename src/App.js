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
    await this.#lottoGame.inputWinningNumbers();
    await this.#lottoGame.inputBonusNumber();
  }
}

export default App;
