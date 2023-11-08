import LottoGameController from './controller/LottoGameController.js';

class App {
  async play() {
    const lottoGame = new LottoGameController();
    await lottoGame.gameStart();
  }
}

export default App;
