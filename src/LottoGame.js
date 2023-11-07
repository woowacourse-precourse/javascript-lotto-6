import LottoPurchaser from './LottoPurchaser.js';
import View from './View.js';
import WinningLotto from './WinningLotto.js';
import WinningResults from './WinningResults.js';

class LottoGame {
  #lottoPurchaser;
  #winningLotto;

  async play() {
    await this.#createPurchaser();
    this.#purchaseLottos();
    await this.#createWinningLotto();
    this.#lottoPurchaser.check(this.#winningLotto);
    this.#showResults();
    this.#showProfitRate();
  }

  async #createPurchaser() {
    try {
      this.#lottoPurchaser = new LottoPurchaser(
        await this.#getPurchaseAmount(),
        new WinningResults(),
      );
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

  #showProfitRate() {
    const profitRate = this.#lottoPurchaser.getProfitRate();
    console.log(profitRate);
  }
}

export default LottoGame;
