import Lotto from './Lotto.js';
import Utils from './Utils.js';
import Validation from './Validation.js';

class IssuingLotto {
  #cost;

  constructor(cost) {
    this.#validate(cost);
    this.#cost = cost;
  }

  #validate(cost) {
    Validation.isNumber(cost);
    Validation.isDividedIntoUnitPrice(cost);
  }

  getCost() {
    return this.#cost;
  }
}

export default IssuingLotto;
