import LottoGameController from './controllers/LottoGameController.js';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    lottoGame.start();
  }
}

export default App;
