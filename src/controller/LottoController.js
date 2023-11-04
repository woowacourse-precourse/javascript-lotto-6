import SYMBOLS from '../constants/symbols.js';
import Lotto from '../model/Lotto.js';
import LottoStore from '../model/LottoStore.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #purchaseAmount;

  #inputView;

  #userLottos;

  #winningNumbers;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    await this.#buyLottos();
    await this.#showLottos();
    await this.#drawWinningNumbers();
  }

  async #buyLottos() {
    try {
      this.#purchaseAmount = await this.#inputView.readPurchaseAmount();
      this.#userLottos = new LottoStore(this.#purchaseAmount).getUserLottos();
    } catch (error) {
      OutputView.printError(error);
      await this.#buyLottos();
    }
  }

  async #showLottos() {
    OutputView.printLottosQuantity(this.#userLottos.length);
    OutputView.printLottos(this.#userLottos);
  }

  async #drawWinningNumbers() {
    try {
      const readInput = (await this.#inputView.readWinningNumbers())
        .split(SYMBOLS.comma)
        .map(Number);
      this.#winningNumbers = new Lotto(readInput).getWinningNumbers();
    } catch (error) {
      OutputView.printError(error);
      await this.#drawWinningNumbers();
    }
  }
}

export default LottoController;
