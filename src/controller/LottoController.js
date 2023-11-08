import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Customer from '../domain/Customer.js';
import LottoWinResult from '../domain/LottoWinResult.js';
import WinningLotto from '../domain/WinningLotto.js';

class LottoController {
  #customer;

  #lottoWinResult;

  async handleBuyLottos() {
    const money = await InputView.readMoney();
    this.#customer = new Customer(money);
    this.#customer.buyLottos();
    OutputView.printLottos(this.#customer.getLottos());
  }

  async handleCreateWinResult() {
    const winningNumbers = await InputView.readWinningNumbers();
    const bonusNumber = await InputView.readBonusNumber();

    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

    this.#lottoWinResult = new LottoWinResult(winningLotto);
  }

  async handleLottoResult() {
    const receivedPrizes = this.#customer.receivePrizes(this.#lottoWinResult);
    const profitRate = this.#customer.calcProfitRate();

    OutputView.printLottoResult(receivedPrizes);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoController;
