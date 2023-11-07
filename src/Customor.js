import LottoView from './LottoView.js';
import LottoMachine from './LottoMachine.js';
import Validation from './Validation.js';
import { ERROR_MESSAGE, ENTER_MESSAGE } from './constants/message.js';
class Customer {
  #money;
  #lottoBundle;

  async buyLotto() {
    let money;
    while (true) {
      try {
        money = await LottoView.getUserInput(ENTER_MESSAGE.purchase_amount);
        if (!Validation.isProperPurchaseAmount(money)) {
          throw new Error(ERROR_MESSAGE.purchase_amount);
        }
        break;
      } catch {
        LottoView.printMessage(ERROR_MESSAGE.purchase_amount);
      }
    }
    this.#money = money;
    const lottoMachine = new LottoMachine();
    this.#lottoBundle = lottoMachine.issueLotto(this.#money);
    LottoView.printLottoBundle(this.#lottoBundle);
  }

  getLottoBundle() {
    return this.#lottoBundle;
  }
}
export default Customer;
