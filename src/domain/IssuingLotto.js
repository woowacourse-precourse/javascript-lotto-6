import { Random } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { NUMBER_OPTIONS } from '../service/Constants.js';

class IssuingLotto {
  #count;

  constructor(count) {
    this.#count = count;
  }

  #getRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      NUMBER_OPTIONS.beginRange,
      NUMBER_OPTIONS.endRange,
      NUMBER_OPTIONS.winningLength,
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

    return usersLotto;
  }

  getLottoList() {
    const lottoList = this.#issueLotto();
    return lottoList;
  }
}

export default IssuingLotto;
