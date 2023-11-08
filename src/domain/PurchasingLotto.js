import Validation from '../service/Validation.js';
import { PURCHASE_OPTIONS } from '../service/Constants.js';

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
    const lottoCount = this.#cost / PURCHASE_OPTIONS.unitPrice;
    return lottoCount;
  }

  getPurchaseCount() {
    const purchaseCount = this.#calculateCount();
    return purchaseCount;
  }
}

export default PurchasingLotto;
