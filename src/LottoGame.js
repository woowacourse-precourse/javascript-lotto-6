import LottoPurchaser from './LottoPurchaser.js';
import { TEMPLATE } from './Message.js';
import View from './View.js';
import WinningLotto from './WinningLotto.js';

class LottoGame {
  #purchaser;
  #winningLotto;

  async play() {
    await this.#start();
    this.#purchaseLottos();
    await this.#createWinningLotto();
    this.#purchaser.check(this.#winningLotto);
  }

  async #start() {
    try {
      const purchaseAmount = await View.askPurchaseAmount();
      this.#purchaser = new LottoPurchaser(purchaseAmount);
    } catch (error) {
      View.print(error.message);
      await this.#start();
    }
  }

  #purchaseLottos() {
    this.#purchaser.purchase();
    this.#showLottoCount();
    this.#showSortedLottos();
  }

  #showLottoCount() {
    const numberOfLottos = this.#purchaser.getLottoCount();
    const message = TEMPLATE.numberOfLottos(numberOfLottos);
    View.print(message);
  }

  #showSortedLottos() {
    const sortedLottos = this.#purchaser.getSortedLottos();
    const message = sortedLottos.reduce(
      (acc, cur) => acc + TEMPLATE.sortedLotto(cur.join(', ')),
      '',
    );
    View.print(message);
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
