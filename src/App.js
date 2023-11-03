import lottoGame from './interactions/lottoGame.js';

class App {
  #lottoGame = lottoGame;

  async play() {
    await this.#lottoGame.run();
  }
}

export default App;
