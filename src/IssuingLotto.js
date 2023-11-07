import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Utils from './Utils.js';
import Validation from './Validation.js';

const LOTTO = {
  price: 1000,
};

class IssuingLotto {
  #cost;

  #count;

  #issuedLotto;

  constructor(cost) {
    this.#validate(cost);
    this.#cost = cost;
    this.#issuedLotto = null;
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

  #getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers;
  }

  #issueLotto() {
    const usersLotto = [];

    for (let issueCount = 0; issueCount < this.#count; issueCount += 1) {
      const numbers = this.#getRandomNumbers();
      const lotto = new Lotto(numbers);
      const lottoNumbers = lotto.getNumbers();
      lottoNumbers.sort((prev, follow) => prev - follow);

      usersLotto.push(lottoNumbers);
    }

    this.#issuedLotto = usersLotto;
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
