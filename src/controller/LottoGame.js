import Validator from '../utils/validator.js';
import { InputView } from '../view/index.js';

export default class LottoGame {
  async run() {
    const purchaseAmount = await this.#requirePurchaseAmount();
  }

  async #requirePurchaseAmount() {
    const amount = await InputView.readPurchaseAmount();
    Validator.validatePurchaseAmount(amount);
    return amount;
  }
}
