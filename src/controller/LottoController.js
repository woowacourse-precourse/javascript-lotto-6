import Lottos from "../domain/Lottos.js";
import Money from "../domain/Money.js";
import Rank from "../domain/Rank.js";
import WinningNumber from "../domain/WinningNumber.js";
import BonusNumber from "../domain/BonusNumber.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  #lottos;
  #count;
  #winningNumber;
  #bonusNumber;
  #winningStatistic;
  #revenueRate;

  constructor() {}

  async playGame() {
    await this.#inputPurchasePrice();
  }

  async #inputPurchasePrice() {
    const price = await InputView.readPurchasePrice();
    await this.#purchaseLottos(price);
  }

  async #purchaseLottos(input) {
    this.#count = new Money(input);
    this.#lottos = new Lottos(this.#count.getAmount());
    OutputView.printPurchaseAmount(this.#count.getAmount());
    OutputView.printLottos(this.#lottos.getLottos());
    await this.#inputWinningNumber();
  }

  async #inputWinningNumber() {
    const winningNumber = await InputView.readWinningNumber();
    this.#winningNumber = new WinningNumber(winningNumber);
    await this.#inputBonusNumber();
  }

  async #inputBonusNumber() {
    const bonusNumber = await InputView.readBonusNumber(
      this.#winningNumber.getWinningNumber()
    );
    this.#bonusNumber = new BonusNumber(bonusNumber);
    this.#winningStatistic = new Rank(this.#lottos.getLottos());
    this.#displayResult();
  }

  #displayResult() {
    const winningStatistic = this.#winningStatistic.getRankStatistic({
      winningNumber: this.#winningNumber.getWinningNumber(),
      bonusNumber: this.#bonusNumber.getBonusNumber(),
    });
    OutputView.printResultStatistic(winningStatistic);
    this.#revenueRate = this.#count.getRevenueRate(winningStatistic);
    OutputView.printRevenueResult(this.#revenueRate);
    return;
  }
}

export default LottoController;
