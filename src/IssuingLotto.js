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

  #issueLotto(cost) {
    const usersLotto = [];
    const lottoCount = Utils.calculateLottoCount(cost);

    for (let issueCount = 0; issueCount < lottoCount; issueCount += 1) {
      const numbers = Utils.getRandomNumbers();
      usersLotto.push(new Lotto(numbers));
    }

    return usersLotto;
  }

  getCost() {
    return this.#cost;
  }

  getLotto() {
    const issuedLotto = this.#issueLotto();
    return issuedLotto;
  }
}

export default IssuingLotto;
