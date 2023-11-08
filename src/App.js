import LottoGame from './LottoGame.js';

class App {
  constructor() {
    this.game = new LottoGame();
  }

  async play() {
    await this.game.startGame();
  }
}

export default App;
