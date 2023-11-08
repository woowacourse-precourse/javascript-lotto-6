import LottoPurchaser from './LottoPurchaser.js';
import LottoShop from './LottoShop.js';
import View from './View.js';
import WinningLotto from './WinningLotto.js';
import WinningResults from './WinningResults.js';

class LottoGame {
  #lottoPurchaser = new LottoPurchaser(new WinningResults());
  #winningLotto;

  async play() {
    await this.#purchaseLottos();

    View.printLottoCount(this.#lottoPurchaser.getLottoCount());
    View.printLottos(this.#lottoPurchaser.getLottos());

    await this.#saveWinningLotto();
    this.#lottoPurchaser.check(this.#winningLotto);

    View.printWinningResults(this.#lottoPurchaser.getWinningResults());
    View.printProfitRate(this.#lottoPurchaser.getProfitRate());
  }

  async #purchaseLottos() {
    try {
      new LottoShop().sellTo(
        this.#lottoPurchaser,
        await View.askPurchaseAmount(),
      );
    } catch (error) {
      View.print(error.message);
      await this.#purchaseLottos();
    }
  }

  async #saveWinningLotto() {
    try {
      this.#winningLotto = new WinningLotto(
        await View.askWinningNumbers(),
        await View.askBonusNumber(),
      );
    } catch (error) {
      View.print(error.message);
      await this.#saveWinningLotto();
    }
  }
}

export default LottoGame;
