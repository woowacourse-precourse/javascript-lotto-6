import LottoGame from './LottoProcess.js';

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.lottoProcess();
  }
}

export default App;
