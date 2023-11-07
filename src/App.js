import Game from './game/Game.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new Game();
  }

  async play() {
    await this.#lottoGame.purchase();
  }
}

export default App;
