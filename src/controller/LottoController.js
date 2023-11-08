import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import CONSTANTS from '../constants/constants.js';
import Lottos from '../domain/Lottos.js';

class LottoController {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  async gameStart() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const count = this.#getCount(purchaseAmount);
    this.#generateLottos(count);
    this.#printLottos(count);
    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber();
    this.#printWinningStatistics(winningNumbers, bonusNumber);
    this.#printRateOfReturn(purchaseAmount, winningNumbers, bonusNumber);
  }

  async #inputPurchaseAmount() {
    return InputView.readPurchaseAmount();
  }

  async #inputWinningNumbers() {
    return InputView.readWinningNumbers();
  }

  async #inputBonusNumber() {
    return InputView.readbonusNumber();
  }

  #getCount(purchaseAmount) {
    return purchaseAmount / CONSTANTS.purchaseAmount.amountDivisor;
  }

  #generateLottos(count) {
    const lottos = new Lottos(count);
    this.#lottos = lottos.getLottos();
  }

  #printLottos(count) {
    OutputView.printLottosString(count, this.#lottos);
  }

  #printWinningStatistics(winningNumbers, bonusNumber) {
    OutputView.printWinningStatisticsString(this.#lottos, winningNumbers, bonusNumber);
  }

  #printRateOfReturn(purchaseAmount, winningNumbers, bonusNumber) {
    OutputView.printRateOfReturnString(this.#lottos, purchaseAmount, winningNumbers, bonusNumber);
  }
}

export default LottoController;
