import LottoGame from './controller/LottoGame.js';

class App {
  constructor() {
    this.lottoGame = new LottoGame();
  }

  async play() {
    this.lottoGame.start();
  }
}

export default App;
