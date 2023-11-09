import LottoController from './controller/LottoController';
import WinningController from './controller/WinningController';

class App {
  #lottoController;

  #winningController;

  async play() {
    this.#lottoController = new LottoController();
    await this.#lottoController.inputLottoPrice();
    await this.#lottoController.purchaseLotto();

    this.#winningController = new WinningController(
      this.#lottoController.getLottos(),
    );
    await this.#winningController.inputLottoNumbers();
    await this.#winningController.result();
  }
}

export default App;
