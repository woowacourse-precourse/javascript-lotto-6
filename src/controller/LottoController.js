import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Buyer from '../domain/Buyer.js';
import LottoWinResult from '../domain/LottoWinResult.js';
import WinningLotto from '../domain/WinningLotto.js';

class LottoController {
  #buyer;

  #lottoWinResult;

  async handleBuyLottos() {
    const money = await InputView.readMoney();
    this.#buyer = new Buyer(money);
    this.#buyer.buyLottos();
    OutputView.printLottos(this.#buyer.getLottos());
  }

  async handleCreateWinResult() {
    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber();

    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

    this.#lottoWinResult = new LottoWinResult(winningLotto);
  }

  async handleLottoResult() {
    const receivedPrizes = this.#buyer.receivePrizes(this.#lottoWinResult);
  }
}

export default LottoController;
