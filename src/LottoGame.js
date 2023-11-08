import LottoPurchaser from './LottoPurchaser.js';
import LottoShop from './LottoShop.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import WinningLotto from './WinningLotto.js';
import WinningResults from './WinningResults.js';

class LottoGame {
  #lottoPurchaser = new LottoPurchaser(new WinningResults());
  #winningLotto;

  async play() {
    await this.#purchaseLottos();

    OutputView.printLottoCount(this.#lottoPurchaser.getLottoCount());
    OutputView.printLottos(this.#lottoPurchaser.getLottos());

    await this.#saveWinningLotto();
    this.#lottoPurchaser.check(this.#winningLotto);

    OutputView.printWinningResults(this.#lottoPurchaser.getWinningResults());
    OutputView.printProfitRate(this.#lottoPurchaser.getProfitRate());
  }

  async #purchaseLottos() {
    try {
      LottoShop.sellTo(
        this.#lottoPurchaser,
        await InputView.askPurchaseAmount(),
      );
    } catch (error) {
      OutputView.print(error.message);
      await this.#purchaseLottos();
    }
  }

  async #saveWinningLotto() {
    try {
      this.#winningLotto = new WinningLotto(
        await InputView.askWinningNumbers(),
        await InputView.askBonusNumber(),
      );
    } catch (error) {
      OutputView.print(error.message);
      await this.#saveWinningLotto();
    }
  }
}

export default LottoGame;
