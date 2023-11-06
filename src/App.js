import LottoGameController from './controllers/LottoGameController.js';

class App {
  async play() {
    const controller = new LottoGameController();
    controller.start();
  }
}

export default App;
