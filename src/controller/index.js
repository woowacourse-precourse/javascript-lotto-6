import Bonus from '../Bonus.js';
import Lotto from '../Lotto.js';
import { LOTTO, LOTTO_PROCESS } from '../constants/System.js';
import LottoModel from '../model/index.js';
import Converter from '../utils/Converter.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  /**
   * @type {LottoModel}
   * @private
   */
  #model;

  constructor() {
    this.#model = new LottoModel();
  }

  async startGame() {
    const userLottos = await this.#purchaseLotto();

    OutputView.printLottos(userLottos);

    const { winningNumbers, bonusNumber } = await this.#drawLotto();

    OutputView.printStatistics(this.#model.getWinningStatistics(winningNumbers, bonusNumber));
  }

  async #purchaseLotto() {
    try {
      const purchaseAmount = await InputView.readPurchaseAmount();
      const userLottos = this.#model.generateLotto(purchaseAmount);

      return userLottos;
    } catch ({ message }) {
      return this.#onError(message);
    }
  }

  async #drawLotto() {
    const winningNumbers = await this.#getWinningNumbers();
    const bonusNumber = await this.#getBonusNumber(winningNumbers);

    return { winningNumbers, bonusNumber };
  }

  async #getWinningNumbers() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();

      return Lotto.of(Converter.split(winningNumbers, LOTTO.delimiter));
    } catch ({ message }) {
      return this.#onError(message, LOTTO_PROCESS.winning);
    }
  }

  async #getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await InputView.readBonusNumber();

      return Bonus.of(bonusNumber, winningNumbers);
    } catch ({ message }) {
      return this.#onError(message, LOTTO_PROCESS.bonus, winningNumbers);
    }
  }

  /**
   * @param {string} message
   * @param {string} process
   * @param {Lotto} arg - winningNumber
   * @returns {Promise<any>}
   */
  #onError(message, process, arg) {
    LottoController.#printError(message);

    if (process === LOTTO_PROCESS.bonus) {
      return this.#getBonusNumber(arg);
    }

    if (process === LOTTO_PROCESS.winning) {
      return this.#getWinningNumbers();
    }

    return this.#purchaseLotto();
  }

  /**
   * @param {string} message
   */
  static #printError(message) {
    OutputView.print(message);
  }
}

export default LottoController;
