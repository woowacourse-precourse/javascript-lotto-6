import LottoView from './LottoView.js';
import LottoMachine from './LottoMachine.js';
import Validation from './Validation.js';
import { ERROR_MESSAGE, ENTER_MESSAGE } from './constants/message.js';
class Customer {
  #money;
  #lottoBundle;

  async buyLotto() {
    const lottoMachine = new LottoMachine();
    while (true) {
      try {
        this.#money = await LottoView.getUserInput(
          ENTER_MESSAGE.purchase_amount
        );
        this.#lottoBundle = lottoMachine.issueLotto(this.#money);
        break;
      } catch (error) {
        LottoView.printMessage(error.message);
      }
    }
    LottoView.printLottoBundle(this.#lottoBundle);
  }

  getLottoBundle() {
    return this.#lottoBundle;
  }
}
export default Customer;
