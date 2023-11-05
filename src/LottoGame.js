import LottoPurchaser from './LottoPurchaser.js';
import { TEMPLATE } from './Message.js';
import View from './View.js';

class LottoGame {
  #purchaser;

  async play() {
    try {
      const purchaseAmount = await View.askPurchaseAmount();
      this.#purchaser = new LottoPurchaser(purchaseAmount);
      this.#purchaseLottos();
      await this.#createWinningLotto();
    } catch (error) {
      View.print(error.message);
      await this.play();
    }
  }

  #purchaseLottos() {
    this.#purchaser.purchase();
    this.#showNumberOfLottos();
    this.#showSortedLottos();
  }

  #showNumberOfLottos() {
    const numberOfLottos = this.#purchaser.getNumbersOfLottos();
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
    const winningNumbers = await View.askWinningNumbers();
    const bonusNumber = await View.askBonusNumber();
    console.log(winningNumbers, bonusNumber);
  }
}

export default LottoGame;
