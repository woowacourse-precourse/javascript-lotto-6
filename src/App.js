import LottoGameController from './constroller/LottoGameController.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGameController();
  }

  async play() {
    await this.#lottoGame.startGame();
  }
}

export default App;
