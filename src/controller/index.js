import Lotto from '../Lotto.js';
import { LOTTO } from '../constants/System.js';
import LottoModel from '../model/index.js';
import Converter from '../utils/Converter.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #model;

  constructor() {
    this.#model = new LottoModel();
  }

  async startGame() {
    const userLottos = await this.#purchaseLotto();

    OutputView.printLottos(userLottos);

    const { winningNumbers, bonusNumber } = await this.#drawLotto();
  }

  async #purchaseLotto() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const userLottos = this.#model.generateLotto(purchaseAmount);

      return userLottos;
    } catch (error) {
      OutputView.print(error.message);

      const purchaseAmount = await this.#purchaseLotto();

      return purchaseAmount;
    }
  }

  async #drawLotto() {
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber();

    return { winningNumbers, bonusNumber };
  }

  async #getWinningNumbers() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();

      return Lotto.of(Converter.split(winningNumbers, LOTTO.delimiter));
    } catch (error) {
      OutputView.print(error.message);

      const winningNumbers = this.#getWinningNumbers();

      return winningNumbers;
    }
  }

  async #getBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();

      return bonusNumber;
    } catch (error) {
      OutputView.print(error.message);

      const bonusNumber = this.#getBonusNumber();

      return bonusNumber;
    }
  }
}

export default LottoController;
