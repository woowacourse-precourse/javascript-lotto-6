import LottoGameController from './controllers/LottoGameController.js';

class App {
  async play() {
    const controller = new LottoGameController();
    await controller.executeLottoGame();
  }
}

export default App;
