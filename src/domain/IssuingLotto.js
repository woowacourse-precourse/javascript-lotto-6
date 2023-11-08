import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';

const NUMBERS_OPTIONS = {
  first: 1,
  last: 45,
  length: 6,
};

class IssuingLotto {
  #count;

  #issuedLotto;

  constructor(count) {
    this.#count = count;
    this.#issueLotto();
  }

  #getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      NUMBERS_OPTIONS.first,
      NUMBERS_OPTIONS.last,
      NUMBERS_OPTIONS.length,
    );
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
}

export default IssuingLotto;
