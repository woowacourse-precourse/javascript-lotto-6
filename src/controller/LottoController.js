import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import CONSTANTS from '../constants/constants.js';
import Lottos from '../domain/Lottos.js';
import WinningStatistics from '../domain/WinningStatistics.js';
import RateOfReturn from '../domain/RateOfReturn.js';

class LottoController {
  #lottos;

  #winningStatistics;

  #rateOfReturn;

  constructor() {}

  async gameStart() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const count = this.#getCount(purchaseAmount);
    this.#generateLottos(count);
    this.#printLottos(count);
    const winningNumbers = await this.#inputWinningNumbers();
    const bonusNumber = await this.#inputBonusNumber();
    this.#generateWinningStatistics(winningNumbers, bonusNumber);
    this.#printWinningStatistics();
    this.#generateRateOfReturn(this.#winningStatistics.getWinningStatistics(), purchaseAmount);
    this.#printRateOfReturn();
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
    this.#lottos = new Lottos(count).getLottos();
  }

  #generateWinningStatistics(winningNumbers, bonusNumber) {
    this.#winningStatistics = new WinningStatistics(this.#lottos, winningNumbers, bonusNumber);
  }

  #generateRateOfReturn(winningStatistics, purchaseAmount) {
    this.#rateOfReturn = new RateOfReturn(winningStatistics, purchaseAmount).getRateOfReturn();
  }

  #printLottos(count) {
    OutputView.printLottosString(count, this.#lottos);
  }

  #printWinningStatistics() {
    OutputView.printWinningStatisticsString(this.#winningStatistics.getWinningStaticsString());
  }

  #printRateOfReturn() {
    OutputView.printRateOfReturnString(this.#rateOfReturn);
  }
}

export default LottoController;
