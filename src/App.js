import LottoGame from './LottoGame/index.js';

class App {
  constructor() {
    this.game = new LottoGame();
  }

  async play() {
    await this.game.start();
  }
}

export default App;
