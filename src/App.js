import LottoGame from '../src/controller/LottoGame';

class App {
  lottoGame = new LottoGame();

  async play() {
    await this.lottoGame.start();
  }
}

export default App;
