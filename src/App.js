import LottoGame from './controller/LottoGame.js';

class App {
  async play() {
    const lottoGame = new LottoGame();
    await lottoGame.process();
  }
}

export default App;
