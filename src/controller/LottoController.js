import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Buyer from '../domain/Buyer.js';
import LottoFactory from '../domain/LottoFactory.js';

class LottoController {
  #buyer;

  async handleBuyLottos() {
    const money = await InputView.readMoney();
    this.#buyer = new Buyer(money);
    this.#buyer.buyLottos();
    OutputView.printLottos(this.#buyer.lottos);
  }
}

export default LottoController;
