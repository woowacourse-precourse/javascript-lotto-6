import LottoController from './controller/LottoController';
import WinningController from './controller/WinningController';

class App {
  #lottoController;

  #winningController;

  async play() {
    this.#lottoController = new LottoController();
    this.#winningController = new WinningController();

    await this.#lottoController.inputLottoPrice();
    await this.#lottoController.purchaseLotto();
    await this.#winningController.inputLottoNumbers();
    await this.#winningController.produceStatistics();
  }
}

export default App;
