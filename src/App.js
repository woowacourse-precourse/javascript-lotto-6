import LottoGame from './Controller/LottoGame.js';

class App {
  async play() {
    const lottoGame = new LottoGame();

    await lottoGame.buyLottos();
    await lottoGame.createWinningLotto();
    lottoGame.createWinningResult();
  }
}

export default App;
