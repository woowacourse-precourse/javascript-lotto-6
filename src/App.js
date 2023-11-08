import LottoController from './controller/LottoController.js';

class App {
  #controller;

  async play() {
    this.#controller = new LottoController();
    await this.#controller.getPurchaseAmount();
    this.#controller.printLottoNumbers();
    await this.#controller.getWinningNumbers();
  }
}

export default App;
