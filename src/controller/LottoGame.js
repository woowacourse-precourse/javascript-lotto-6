import Screen from '../view/Screen';
import { MONEY_UNIT } from '../Constants';

class LottoGame {
  #count;

  async start() {
    await this.#inputPurchaseCount();
  }

  async #inputPurchaseCount() {
    this.#count = (await Screen.inputPurchaseMoney()) / MONEY_UNIT;
  }
}

export default LottoGame;
