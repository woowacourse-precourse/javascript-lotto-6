import LottoGameController from './controller/LottoGameController.js';

class App {
  async play() {
    const controller = new LottoGameController();
    controller.lottoGame();
  }
}

export default App;
