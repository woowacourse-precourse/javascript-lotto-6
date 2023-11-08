import LottoGameController from './controllers/LottoGameController.js';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    lottoGame.startLottoGame();
  }
}

export default App;
