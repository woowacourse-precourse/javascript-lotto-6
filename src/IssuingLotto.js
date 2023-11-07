import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Utils from './Utils.js';

class IssuingLotto {
  #count;

  #issuedLotto;

  constructor(count) {
    this.#count = count;
    this.#issueLotto();
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

  showIssuedLotto() {
    const lottoList = this.#issuedLotto.map((lotto) => `[${lotto.join(', ')}]`);

    Utils.informUser(`${this.#count}개를 구매했습니다.`);
    Utils.informUser(`${lottoList.join('\n')}`);
  }
}

export default IssuingLotto;
