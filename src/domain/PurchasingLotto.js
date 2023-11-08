import Validation from '../service/Validation.js';

const LOTTO = {
  price: 1000,
};

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
