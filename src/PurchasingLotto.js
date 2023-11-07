import Utils from './Utils.js';
import Validation from './Validation.js';

class PurchasingLotto {
  #cost;

  constructor(cost) {
    this.#validate(cost);
    this.#cost = cost;
  }

  #validate(cost) {
    Validation.isNumber(cost);
    Validation.isDividedIntoUnitPrice(cost);
  }

  #calculateCount() {
    const lottoCount = this.#cost / LOTTO.price;
    return lottoCount;
  }

  getPurchaseCount() {
    const purchaseCount = this.#calculateCount();
    return purchaseCount;
  }
}

export default PurchasingLotto;
