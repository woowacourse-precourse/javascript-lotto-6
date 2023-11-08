import GameController from './controller/GameController.js';

class App {
  #lottoGame;

  constructor() {
    this.#lottoGame = new GameController();
  }

  async play() {
    await this.#lottoGame.startGame();
  }
}

export default App;
