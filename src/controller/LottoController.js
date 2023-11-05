import SYMBOLS from '../constants/symbols.js';
import Bonus from '../model/Bonus.js';
import Lotto from '../model/Lotto.js';
import LottoStore from '../model/LottoStore.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #purchaseAmount;

  #inputView;

  #userLottos;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#inputView = new InputView();
  }

  async start() {
    await this.#buyLottos();
    await this.#showLottos();
    await this.#drawWinningNumbers();
    await this.#drawBonusNumber();
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

  async #drawBonusNumber() {
    try {
      const readInput = await this.#inputView.readBonusNumber();
      this.#bonusNumber = new Bonus(
        readInput,
        this.#winningNumbers,
      ).getBonusNumber();
    } catch (error) {
      OutputView.printError(error);
      await this.#drawBonusNumber();
    }
  }
}

export default LottoController;
