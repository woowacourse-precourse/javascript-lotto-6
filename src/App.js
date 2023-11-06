import LottoGame from '../Controller/LottoGame.js';

class App {
  #lottoGame = new LottoGame();
  async play() {
    await this.#lottoGame.play();
  }
}

export default App;
