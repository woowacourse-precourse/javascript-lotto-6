import InputView from '../view/InputView.js';
import Buyer from '../domain/Buyer.js';

class LottoController {
  #buyer;

  async handleBuyLottos() {
    const money = await InputView.readMoney();
    this.#buyer = new Buyer(money);
  }
}

export default LottoController;
