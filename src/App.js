import LottoGame from './controller/LottoGame.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    await this.lottoGame.start();
  }
}

export default App;
