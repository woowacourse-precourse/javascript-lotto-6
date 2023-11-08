import LottoGame from './Controller/LottoGame.js';

class App {
  #lottoGame = new LottoGame();

  async play() {
    await this.#lottoGame.run();
  }
}

export default App;
