import LottoPurchaser from './LottoPurchaser.js';
import View from './View.js';
import WinningLotto from './WinningLotto.js';

class LottoGame {
  #lottoPurchaser;
  #winningLotto;

  async play() {
    await this.#createPurchaser();
    this.#purchaseLottos();
    await this.#createWinningLotto();
    this.#lottoPurchaser.check(this.#winningLotto);
    this.#showResults();
  }

  async #createPurchaser() {
    try {
      const purchaseAmount = await this.#getPurchaseAmount();
      this.#lottoPurchaser = new LottoPurchaser(purchaseAmount);
    } catch (error) {
      View.print(error.message);
      await this.#createPurchaser();
    }
  }

  async #getPurchaseAmount() {
    const purchaseAmount = await View.askPurchaseAmount();
    return purchaseAmount;
  }

  #purchaseLottos() {
    this.#lottoPurchaser.purchase();
    View.printLottoCount(this.#lottoPurchaser.getLottoCount());
    View.printSortedLottos(this.#lottoPurchaser.getSortedLottos());
  }

  async #createWinningLotto() {
    try {
      this.#winningLotto = new WinningLotto(
        await this.#getWinningNumbers(),
        await this.#getBonusNumber(),
      );
    } catch (error) {
      View.print(error.message);
      await this.#createWinningLotto();
    }
  }

  async #getWinningNumbers() {
    const winningNumbers = await View.askWinningNumbers();
    return winningNumbers;
  }

  async #getBonusNumber() {
    const bonusNumber = await View.askBonusNumber();
    return bonusNumber;
  }

  #showResults() {
    const resultMap = this.#lottoPurchaser.getResultMap();
    View.printWinningResults(resultMap);
  }
}

export default LottoGame;
