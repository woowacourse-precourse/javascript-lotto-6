import LottoGameController from './controllers/LottoGameController.js';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    await lottoGame.start();
  }
}

export default App;
