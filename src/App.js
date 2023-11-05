import LottoGame from './LottoGame.js';

class App {
  #lottoGame;

  async play() {
    this.#lottoGame = new LottoGame();
    this.#lottoGame.start();
  }
}

export default App;
