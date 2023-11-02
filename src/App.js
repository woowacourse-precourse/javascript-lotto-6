import LottoGame from './controller/LottoGame.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    await this.#lottoGame.startGame();
  }
}

export default App;
