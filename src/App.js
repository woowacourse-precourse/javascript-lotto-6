import LottoController from './controller/LottoController.js';

class App {
  #controller;

  async play() {
    this.#controller = new LottoController();
    await this.#controller.getPurchaseAmount();
    this.#controller.printLottoNumbers();
    await this.#controller.getWinningNumbers();
    await this.#controller.getBonusNumber();
    this.#controller.calculateMatchCount();
    this.#controller.printResult();
  }
}

export default App;
