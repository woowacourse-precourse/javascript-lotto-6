import LottoGame from './LottoGame.js';

class App {
  #lottoGame;

  async play() {
    this.#lottoGame = new LottoGame();
    await this.#lottoGame.play();
  }
}

export default App;
