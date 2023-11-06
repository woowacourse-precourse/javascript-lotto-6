import LottoGame from './LottoGame.js';

class App {
  lottoGame = new LottoGame();

  async play() {
    await this.lottoGame.gameStart();
  }
}

export default App;
