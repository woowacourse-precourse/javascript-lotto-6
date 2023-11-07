import Lotto from './Lotto.js';
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
    View.printSortedLottos(this.#lottoPurchaser.getSortedLottos());

    await this.#createWinningLotto();
    this.#lottoPurchaser.check(this.#winningLotto);

    this.#showResults();
    this.#showProfitRate();
  }

  async #purchaseLottos() {
    try {
      new LottoShop().sellTo(
        this.#lottoPurchaser,
        await this.#askPurchaseAmount(),
      );
    } catch (error) {
      View.print(error.message);
      await this.#purchaseLottos();
    }
  }

  async #askPurchaseAmount() {
    const purchaseAmount = await View.askPurchaseAmount();
    return purchaseAmount;
  }

  async #createWinningLotto() {
    try {
      this.#winningLotto = new WinningLotto(
        new Lotto(await this.#getWinningNumbers()),
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
    View.printProfitRate(profitRate);
  }
}

export default LottoGame;
