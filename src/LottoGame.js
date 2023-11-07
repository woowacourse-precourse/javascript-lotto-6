import LottoPurchaser from './LottoPurchaser.js';
import View from './View.js';
import WinningLotto from './WinningLotto.js';

class LottoGame {
  #purchaser;
  #winningLotto;

  async play() {
    await this.#determinePurchaseAmount();
    this.#purchaseLottos();
    await this.#createWinningLotto();
    this.#purchaser.check(this.#winningLotto);
  }

  async #determinePurchaseAmount() {
    try {
      const purchaseAmount = await View.askPurchaseAmount();
      this.#purchaser = new LottoPurchaser(purchaseAmount);
    } catch (error) {
      View.print(error.message);
      await this.#determinePurchaseAmount();
    }
  }

  #purchaseLottos() {
    this.#purchaser.purchase();
    View.printLottoCount(this.#purchaser.getLottoCount());
    View.printSortedLottos(this.#purchaser.getSortedLottos());
  }

  async #createWinningLotto() {
    try {
      const winningNumbers = await View.askWinningNumbers();
      const bonusNumber = await View.askBonusNumber();
      this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    } catch (error) {
      View.print(error.message);
      await this.#createWinningLotto();
    }
  }
}

export default LottoGame;
