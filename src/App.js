import LottoGame from './LottoGame.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame;
  }

  async play() {
    await this.lottoGame.playGame();
  }
}

export default App;
