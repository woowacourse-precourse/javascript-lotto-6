import LottoGame from './lottogame/LottoGame.js';

class App {
  constructor() {
    this.game = new LottoGame();
  }

  async play() {
    await this.game.startGame();
  }
}

export default App;
