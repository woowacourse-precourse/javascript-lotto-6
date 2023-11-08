import LottoController from './controller/LottoController.js';

class App {
  async play() {
    this.controller = new LottoController();
    await this.controller.start();
  }
};

export default App;
