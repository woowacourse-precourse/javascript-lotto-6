import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Purchase from '../domain/Purchase.js';
import Lottos from '../domain/Lottos.js';
import WinningNumber from '../domain/WinningNumber.js';
import BonusNumber from '../domain/BonusNumber.js';
import Rank from '../domain/Rank.js';

class Game {
  #quantity;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #winningStatistic;
  #revenueRate;

  constructor() {}

  async playGame() {
    await this.#inputPurchase();
  }

  async #inputPurchase() {
    const amount = await InputView.readPurchasePrice();
    await this.#handlePurchase(amount);
  }

  async #handlePurchase(amount) {
    this.#quantity = new Purchase(amount);
    this.#lottos = new Lottos(this.#quantity.getAmount());
    OutputView.printPurchaseAmount(this.#quantity.getAmount());
    OutputView.printLottos(this.#lottos.getLottos());
    await this.#askWinningNumbers();
  }

  async #askWinningNumbers() {
    const winningNumber = await InputView.readWinningNumbers();
    this.#winningNumbers = new WinningNumber(winningNumber);
    await this.#askBonusNumber();
  }

  async #askBonusNumber() {
    const bonusNumber = await InputView.readBonusNumbers(this.#winningNumbers.getWinningNumber());
    this.#bonusNumber = new BonusNumber(bonusNumber);
    this.#winningStatistic = new Rank(this.#lottos.getLottos());
    this.#displayResult();
  }

  #displayResult() {
    const winningStatistic = this.#winningStatistic.getRankStatistic({
      winningNumber: this.#winningNumbers.getWinningNumber(),
      bonusNumber: this.#bonusNumber.getBonusNumber(),
    });
    OutputView.printResultStatistic(winningStatistic);
    this.#revenueRate = this.#quantity.getRevenueRate(winningStatistic);
    OutputView.printRevenueResult(this.#revenueRate);
    return;
  }
}

export default Game;
