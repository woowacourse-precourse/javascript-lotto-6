import LottoGame from './domain/LottoGame.js';

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.lottoProcess();
  }
}

export default App;
