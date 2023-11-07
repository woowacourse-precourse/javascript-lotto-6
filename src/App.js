import LottoController from './controller/LottoController.js';

class App {
  constructor() {
    this.controller = new LottoController();
  }

  async play() {
    this.controller.gameStart();
  }
}

export default App;
