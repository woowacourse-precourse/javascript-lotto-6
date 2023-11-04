import LottoController from './controller/LottoController.js';

class App {
  async play() {
    const controller = new LottoController();
    await controller.initializeLottoAmount();
  }
}

export default App;
