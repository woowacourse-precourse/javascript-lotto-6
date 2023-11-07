import LottoGame from './controller/LottoGame.js';

class App {
  #lottoGame = null;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    await this.#lottoGame.run();
  }
}

export default App;
