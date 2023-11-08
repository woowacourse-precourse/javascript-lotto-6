import Screen from '../view/Screen';
import { MONEY_UNIT } from '../Constants';

class LottoGame {
  #count;

  async start() {
    await this.#inputPurchaseCount();
  }

  async #inputPurchaseCount() {
    try {
      this.#count = (await Screen.inputPurchaseMoney()) / MONEY_UNIT;
    } catch ({ message }) {
      Screen.printErrorMessage(message);
      await this.#inputPurchaseCount();
    }
  }
}

export default LottoGame;
