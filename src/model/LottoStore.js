import OPTIONS from '../constants/options.js';
import Validator from '../validators/Validator.js';

class LottoStore {
  #purchaseAmount;

  #lottos;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#validate();
    this.#buyLottos();
  }

  #validate() {
    Validator.validatePurchaseAmount(this.#purchaseAmount);
  }

  #buyLottos() {
    this.#lottos = this.#purchaseAmount / OPTIONS.baseAmount;
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoStore;
