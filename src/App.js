import LottoGame from './controller/LottoGame.js';

class App {
  async play() {
    const lottoGame = new LottoGame();

    await lottoGame.buyLotto();
    await lottoGame.drawLotto();
  }
}

export default App;
