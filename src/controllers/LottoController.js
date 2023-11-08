import LottoGame from '../models/LottoGame.js';
import WinningNumber from '../models/WinningNumber.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoController {
  #lottogame;

  #winnginNumber;

  constructor() {
    this.#lottogame = new LottoGame();
    this.#winnginNumber = new WinningNumber();
  }

  async play() {
    await this.#askPurchase();
    await this.#askWinningNumber();
    await this.#askBonusNumber();
    this.#printResult();
  }

  async #askPurchase() {
    try {
      const purchase = await InputView.askPurchase();
      this.#lottogame.setPurchase(purchase);
      OutputView.printLotto(this.#lottogame.getLottos());
    } catch (error) {
      OutputView.print(error.message);
      await this.#askPurchase();
    }
  }

  async #askWinningNumber() {
    try {
      const winningNumber = await InputView.askWinningNumber();
      this.#winnginNumber.setWinningNumber(winningNumber);
    } catch (error) {
      OutputView.print(error.message);
      await this.#askWinningNumber();
    }
  }

  async #askBonusNumber() {
    try {
      const bonusNumber = await InputView.askBonusNumber(this.#winnginNumber.getWinningNumber());
      this.#winnginNumber.setBonusNumber(bonusNumber);
    } catch (error) {
      OutputView.print(error.message);
      await this.#askBonusNumber();
    }
  }

  #printResult() {
    OutputView.winningStatistics(
      this.#lottogame.getWinningResult(
        this.#winnginNumber.getWinningNumber(),
        this.#winnginNumber.getBonusNumber(),
      ),
    );
  }
}
export default LottoController;
