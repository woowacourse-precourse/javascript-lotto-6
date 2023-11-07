import Lotto from './Lotto.js';
import Utils from './Utils.js';
import Validation from './Validation.js';

const LOTTO = {
  price: 1000,
};

class IssuingLotto {
  #cost;

  #count;

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
    this.#count = lottoCount;
    return this.#count;
  }

  #issueLotto() {
    const usersLotto = [];

    for (let issueCount = 0; issueCount < this.#count; issueCount += 1) {
      const numbers = Utils.getRandomNumbers();
      usersLotto.push(new Lotto(numbers));
    }

    return usersLotto;
  }

  getPurchaseCount() {
    this.#calculateCount();
    return this.#count;
  }

  getLotto() {
    const issuedLotto = this.#issueLotto();
    return issuedLotto;
  }
}

export default IssuingLotto;
